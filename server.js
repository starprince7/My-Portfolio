const express = require("express");
const app = express();
/* const mongoose = require("mongoose");
const fs = require("fs");
const PortfolioClient = require("./models/clientschema"); */
/* require("dotenv").config(); */

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
app.post("/clients", (req, res) => {
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

  const auth = {
    auth: {
      api_key: "05de05c7aa84acab9a4c8b665692517c-2af183ba-41c8acf9",
      domain: "sandbox0fea1f853ea44ca199a270a246db3d42.mailgun.org",
    },
  };

  const transport = nodemailer.createTransport(nodemailGun(auth));

  //   const transport = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "rexxrandolph@gmail.com",
  //       pass: "starprincean",
  //     },
  //   });

  const mailOptions = {
    from: "rexxrandolph@gmail.com",
    to: "princeagezinweke@gmail.com",
    subject: "COME WORK FOR ME PRINCE!!!",
    text: `Hey prince, My name is ${name} Here is my email ${email} get back to me as soon as possible.`,
  };


  transport
    .sendMail(mailOptions)
    .then((success) => {
      console.log("MESSAGE SENT!!!");
      res.send({ msg: "success" });
    })
    .catch((err) => console.log("ERROR OCCURED!!!==============", err));

  // const ejs = require('ejs')

  // ejs.renderFile(__dirname + "/mail.ejs", { name: "Prince" })
  //     .then(data => {
  //         const mailOptions = {
  //             from: 'princeagezinweke@gmail.com',
  //             to: 'rexxrandolph@gmail.com',
  //             subject: 'COME WORK FOR ME PRINCE!!!',
  //             text: "Here is my email", email,
  //             html: data
  //         }

  //         transport.sendMail(mailOptions)
  //         .then(success => console.log("MESSAGE SENT!!!"))
  //         .catch(err => console.log("ERROR OCCURED!!!"))
  //      })
  //     .catch(error => console.log("ERROR CANNOT RENDER EJS TEMPLATE!!!"))
});
