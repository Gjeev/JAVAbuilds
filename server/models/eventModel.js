const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    bookInfo:{
        type: String,
        required : true,
        unique:true
    },
    // date + time + game + table 
    code: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const bookings = mongoose.model("bookingSchema", bookingSchema);

module.exports= bookings;