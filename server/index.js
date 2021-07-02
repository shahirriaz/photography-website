require("dotenv").config();
const express = require("express");
const { check, validationResult } = require("express-validator");
const mysql = require("mysql");
const cors = require("cors");

// - App config
const app = express();

// - Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
// const corsOptions = {
//   origin: "http://localhost:3002",
//   credentials: true,
// };
// app.options("*", cors(corsOptions));

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

// DB config
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "kontakt",
  port: "3307",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// - API routes
// app.get("/", function (req, res) {
//   // console.log(res.statusCode);
//   res.status(200).send("SUCCESS");
// });

app.post(
  "/yourInformation",
  check("firstName").notEmpty().isString(),
  check("email").isEmail().isString(),
  check("phone").isInt(),
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
          // console.log("Geeeee");
        }
      }
    }
  }
);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("Connected to port " + port);
});
