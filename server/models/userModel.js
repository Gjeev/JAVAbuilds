const mongoose = require('mongoose');
//const emailValidator = require('email-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    enrollnum : {
        type : String,
        type : String,
        required : true,
        unique:true,
        maxLength:8
    },
    
    password : {
        type : String,
        required : true,
    },
    userEmail : {
        type : String,
        required : true,
        unique: true,
        // validate: function() {
        //     return _validate(this.userEmail);
        // }
    }
});

const users = mongoose.model('users',userSchema);
module.exports= users;