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
        type: String,
        required: true
    },
    date :{
        type: String,
        required:true
    },
    time :{
        type: String,
        required:true
    },
    game: {
        type: String,
        required: true
    },
    table : {
        type: String,
        required: true
    },
    // bookInfo:{
    //     type: String,
    //     required : true,
    //     unique:true
    // },
    // date + time + game + table 
    code: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const bookings = mongoose.model("bookingSchema", bookingSchema);

module.exports= bookings;