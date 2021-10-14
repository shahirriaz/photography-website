require("dotenv").config();

module.exports = {
    auth: {
      api_key: process.env.MAIL_GUN_API,
      domain: process.env.MAIL_GUN_DOMAIN,
      host: "api.eu.mailgun.net",
    },
  };

  
  // const auth = {
//   auth: {
//     api_key: process.env.MAIL_GUN_API,
//     domain: process.env.MAIL_GUN_DOMAIN,
//   },
//   host: "api.eu.mailgun.net",
// };