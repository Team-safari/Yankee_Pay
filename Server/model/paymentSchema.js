const mongoose = require('mongoose')
const Schema = mongoose.Schema;



//Payment Schema
const payment = new Schema({
    amount:String,
    currency: String,
    description : String
})


module.exports = mongoose.model('payments', payment)