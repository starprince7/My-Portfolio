const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
const PortfolioClient = require('./models/clientschema')
require('dotenv').config()

// db connection 
const dbURI = process.env.DB_PASSWORD

const port = process.env.PORT || 4000
mongoose.connect(dbURI)
    .then(result => {
        console.log('Connected to the Database!...')
        app.listen(port, () => {
            console.log('Server is live on port 4000')
        })
    })
    .catch(err => {
        console.log(err)
    })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('portfolioproject 3.0'))
    app.get('*', (req, res) => {
        res.sendFile('./portfolioclient 3.0/index.html', {
            root: __dirname
        })
    })
}

// Middleware 
app.use(express.urlencoded({ extended: true }))
app.use(express.static('client'))


app.post('/portfolio/clients', (req, res) => {
    const newClient = new PortfolioClient(req.body)
    newClient.save()
        .then(result => {
            res.sendFile('./PortfolioProject 3.0/thankyou.html', {
                root: __dirname
            })
        })
        .catch(() => {
            res.send('Please Complete the fields')
        })
})

app.get('/', (req, res) => {
    console.log('incoming Request from client')
    res.sendFile('./client/index.html', {root: __dirname})
})