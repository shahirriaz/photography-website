import App from "../src/App";
const fs = require("fs");
const path = require("path");
const react = require("react");
const reactDomServer = require("react-dom/server");
const express = require("express");

const app = express();

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${reactDomServer.renderToString(<App />)}</div>`
      )
    );
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("App launched");
});
