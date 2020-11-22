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

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rexxrandolph@gmail.com",
      pass: "starprincean",
    },
  });

  const mailOptions = {
    from: "princeagezinweke@gmail.com",
    to: "rexxrandolph@gmail.com",
    subject: "COME WORK FOR ME PRINCE!!!",
    text: `Hey prince, My name is ${name} Here is my email ${email} get back as soon as possible.`,
  };

  transport
    .sendMail(mailOptions)
    .then((success) => {
      console.log("MESSAGE SENT!!!");
      res.send({ msg: "success" });
    })
    .catch((err) => console.log("ERROR OCCURED!!!"));

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
