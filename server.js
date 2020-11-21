const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
const PortfolioClient = require('./models/clientschema')
require('dotenv').config()

// db connection 
const dbURI = process.env.DB_PASSWORD

const port = process.env.PORT || 4000
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(result => {
        console.log('Connected to the Database!...')
        app.listen(port, () => {
            console.log('Server is live on port 4000')
        })
    })
    .catch(err => {
        console.log(err)
    })


// Middleware 
app.use(express.json())
app.use(express.static('client'))


app.post('/clients', (req, res) => {
  console.log('Reg just came in!...', req.body)
    const newClient = new PortfolioClient(req.body)
    newClient.save()
        .then(result => {
            res.json(result)
        })
        .catch((error) => {
            res.send(error)
        })
})

app.get('/', (req, res) => {
    console.log('incoming Request from client')
    res.sendFile('./client/index.html', {root: __dirname})
})
