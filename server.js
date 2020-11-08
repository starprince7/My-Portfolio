const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
const PortfolioClient = require('./models/clientschema')


// db connection 
const dbURI = 'mongodb+srv://starprince:starprince7@starprince.m9v4i.mongodb.net/Projects?retryWrites=true&w=majority'

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


// Middleware 
app.use(express.urlencoded({ extended: true }))
app.use(express.static('client'))


app.post('/portfolio/clients', (req, res) => {
    const newClient = new PortfolioClient(req.body)
    newClient.save()
        .then(result => {
            res.sendFile('./client/thankyou.html', {
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