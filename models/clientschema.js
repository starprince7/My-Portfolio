const mongoose = require('mongoose')
const schema = mongoose.Schema

const clientSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {timestamps: true})

const PortfolioClient = mongoose.model('PortfolioClient', clientSchema)

module.exports = PortfolioClient