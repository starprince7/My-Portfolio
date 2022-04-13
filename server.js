const express = require("express");
const app = express();
/* const mongoose = require("mongoose");
const fs = require("fs");
const PortfolioClient = require("./models/clientschema"); */
require("dotenv").config();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is live on port 4000");
});

app.get("/", (req, res) => {
  console.log("incoming Request from client");
  res.sendFile("./client/index.html", { root: __dirname });
});

// Middleware
app.use(express.json());
app.use(express.static("client"));

// Handle all client "Post" information Here!
app.post("/clients", async (req, res) => {
  console.log("Reg just came in!...", req.body);
  const { name, email } = req.body;
  // const newClient = new PortfolioClient(req.body)
  // newClient.save()
  //     .then(result => {
  //         res.json(result)
  //     })
  //     .catch((error) => {
  //         res.send(error)
  //     })

  const nodemailer = require("nodemailer");
  const nodemailGun = require("nodemailer-mailgun-transport");
  // New Mailing Packages
  const Mailgun = require('mailgun.js')
  const formData = require('form-data')

  const mailgun = new Mailgun(formData)
  const MY_DOMAIN = 'savinglifes.org'

  const auth_credentials = {
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    url: 'https://api.eu.mailgun.net'
  }

  const client = mailgun.client(auth_credentials)

  const mail_options = {
    from: "*Portfolio Website codeplugservices@gmail.com*",
    to: "princeagezinweke@gmail.com",
    subject: "Portfolio Site Contact Form",
    text: `Hey prince, My name is ${name} Here is my email ${email} get back to me as soon as possible.`,
  };
  
    try {
      const mailSuccess = await client.messages.create(MY_DOMAIN, mail_options);
      
      if (mailSuccess) {
        console.log("MESSAGE SENT!!!");
        res.send({ msg: "success" });
      }

    } catch (e) {
      console.log('ERROR SENDIND eMAIL >>>', e)
      res.send({ error: "Something went wrong!" });
    }

});
