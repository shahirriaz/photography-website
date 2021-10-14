const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
// const auth = require("./email-config.js");
const fs = require("fs");
const handlebars = require("handlebars");
const path = require("path");

//Read html file and save it in variable
const emailTemplateSource = fs.readFileSync(
  path.join(__dirname, "/emailTemplate.hbs"),
  "utf8"
);

//handlebars compile the file
const template = handlebars.compile(emailTemplateSource);
 

const auth = {
  auth: {
    api_key: process.env.MAIL_GUN_API,
    domain: process.env.MAIL_GUN_DOMAIN,
  },
  host: "api.eu.mailgun.net",
};

const transporter = nodemailer.createTransport(mailGun(auth));

module.exports = function mainMail(bodyFromClient) {
  
  console.log(bodyFromClient)

  const data = ({
    date,
    timePicked,
    inputUser: { name, email, number, message },
    typeOfShoot,
    durationOfShoot,
    typeOfMeeting,
  } = bodyFromClient);

  const urlLink = {
    url: "https://us-central1-photography-5b191.cloudfunctions.net/api/login",
  };

  //html to send
  const htmlToSend = template({
    date: data.date?.toString(),
    timePicked: data.timePicked?.toString(),
    name: data.inputUser.name.toString(),
    email: data.inputUser.email.toString(),
    number: data.inputUser.number.toString(),
    message: data.inputUser.message.toString(),
    typeOfShoot: data.typeOfShoot?.toString(),
    durationOfShoot: data.durationOfShoot?.toString(),
    typeOfMeeting: data.typeOfMeeting?.toString(),
    accept: urlLink.url,
  });



  const sendMail = (email, subject, cb) => {
    const mailOptions = {
      from: "Kunde@mlfoto.no",
      to: "riaz382@gmail.com",
      subject: "Ml foto",
      text: "Jeg ønsker fotografering",
      html: htmlToSend,
    };
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    });
  };

  sendMail(email, message, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sendt");
      return;
    }
  });
};
