require("dotenv").config();
import App from "../src/App";
const functions = require("firebase-functions");
const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("./db");
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const fs = require("fs");
const path = require("path");
// const react = require("react");
const reactDomServer = require("react-dom/server");

const admin = require("firebase-admin");

const serviceAccount = require("./photography-5b191-firebase-adminsdk-um8kz-096fadb78a.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const cors = require("cors");

const app = express();

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        "<div id=`root`></div>",
        `<div id="root">${reactDomServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.post(
  "/yourInformation",
  check("firstName").notEmpty().isString(),
  check("email").isEmail().isString(),
  check("phone").isInt().isMobilePhone(),
  check("type").notEmpty(),
  check("age").isInt(),
  check("dato").notEmpty().isString(),
  check("comment").isString(),
  check("pricePackage").isString(),
  function (req, res) {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ message: "Error, must be of value numer" });
    } else {
      const firstName = req.body.firstName;
      const email = req.body.email;
      const phone = parseInt(req.body.phone);
      const type = req.body.type;
      const age = parseInt(req.body.age);
      const dato = req.body.dato;
      const comment = req.body.comment;
      const pricePackage = req.body.pricePackage;

      if (firstName && email && phone && type && age && dato) {
        try {
          db.query(
            "INSERT INTO contact (email, phone, type, age, dato, firstName, comment, pricePackage) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [email, phone, type, age, dato, firstName, comment, pricePackage]
          ),
            sendMail(email, dato, req.body, function (err, data) {
              if (err) {
                console.error(err);
              } else {
                console.log("Email sent");
                // OK - Created;
                res.status(201).send("Created user");
                return;
              }
            });

          (error, result) => {
            if (error) {
              console.log(error);
            }
          };
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
);

const auth = {
  auth: {
    api_key: process.env.MAIL_GUN_API,
    domain: process.env.MAIL_GUN_DOMAIN,
  },
  host: "api.eu.mailgun.net",
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (
  email,
  subject,
  { firstName, phone, type, age, comment, dato, pricePackage },
  cb
) => {
  const mailOptions = {
    from: email,
    to: "shallagutten@hotmail.com",
    subject: `${firstName} -- Kunde fra Mlfoto`,
    text: "Jeg ønsker fotografering",
    html: `
            <h1>Kunde fra Mlfoto.no</h1>
            <h2>Navn: ${firstName}</h2>
            <h2>Telefon nummer: ${phone}</h2>
            <h2>Type fotografering ønsket: ${type}</h2>
            <h2>Alder: ${age}</h2>
            <h2>Dato: ${dato}</h2>
            <h3>Kommentar: ${comment}</h3>
            <h3>Pakke: ${pricePackage}</h3>
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

exports.api = functions.https.onRequest(app);
