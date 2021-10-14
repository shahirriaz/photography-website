require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const { check, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");
const path = require("path");
const admin = require("firebase-admin");
const mainMail = require("./email-util.js");

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.post(
  "/bekreftelse",
  limiter,
  check("date").notEmpty(),
  check("timePicked").notEmpty(),
  check("inputUser").notEmpty(),
  function (req, res) {
    const errors2 = validationResult(req);
    if (!errors2.isEmpty()) {
      return res.status(400).send({
        message: "Error, something went wrong",
      });
    } else {
      res.status(201).send("Created user");
      mainMail(req.body);
    }
  }
);

app.use(express.static("public/js"));
app.use(express.static("public/css"));

app.get("/login", function (req, res) {
  // console.log(req)
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/admin/:uid", function (req, res) {
  // console.log(req)
  res.sendFile(path.join(__dirname, "admin.html"));
});

exports.api = functions.https.onRequest(app);
