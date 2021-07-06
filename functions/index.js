const functions = require("firebase-functions");
const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("./db");

const cors = require("cors");

// - App config
const app = express();

// - Middlewares
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
  function (req, res) {
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

      if (firstName && email && phone && type && age && dato) {
        try {
          db.query(
            "INSERT INTO contact (email, phone, type, age, dato, firstName) VALUES (?, ?, ?, ?, ?, ?)",
            [email, phone, type, age, dato, firstName]
          ),
            // OK - Created;
            res.status(201).send("Created user");
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

//Listen command
exports.api = functions.https.onRequest(app);
