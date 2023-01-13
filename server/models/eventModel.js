// user id , game, time , date , table (for pool) , otp
// also implement multiple booking 
//import mongoose
const mongoose = require('mongoose');

//Schema is a constructor function of the object schema of the mongoose object
const Schema = mongoose.Schema;

//create an instance of the schema object
const bookingSchema = new Schema({
    enrollnum: 
    {
        type: Number,
        required: true
    },
    game: 
    {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    table: {
        type: Number,
        required: true
    },
    starttime: {
        type: Number,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    paid: {
        type: Boolean,
        required: true
    }
}, {timestamps: true});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = bookingModel;