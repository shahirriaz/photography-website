require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true, credentials: true }));
const corsOptions = {
  origin: "http://localhost:3002",
  credentials: true,
};
app.options("*", cors(corsOptions));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "kontakt",
  port: "3307",
});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// app.get("/yourInformation", function (req, res) {
//   res.send("Hello world");
// });

app.post("/yourInformation", async function (req, res) {
  const firstName = req.body.firstName;
  const email = req.body.email;
  const phone = parseInt(req.body.phone);
  const type = req.body.type;
  const age = parseInt(req.body.age);
  const dato = req.body.dato;

  // console.log(res);

  res.status(201).send("Created user");
  // db.query(
  //   "INSERT INTO contact (email, phone, type, age, dato, firstName) VALUES (?, ?, ?, ?, ?, ?)",
  //   [email, phone, type, age, dato, firstName],
  //   (err, result) => {
  //     if (err) throw err;
  //     // else console.log(result);
  //   }
  // );
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("Connected to port " + port);
});
