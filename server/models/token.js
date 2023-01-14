const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    enrollnum : {
        type : String,
        type : String,
        required : true,
        unique:true,
        maxLength:8
    },
    token: 
    {
        type: String,
        required: true
    },
}, {timestamps: true});



const token = mongoose.model("token", tokenSchema);

module.exports=token;