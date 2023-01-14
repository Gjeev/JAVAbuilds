const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

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

// userSchema.pre('save', async function(){
//     // this.confirmPassword = undefined;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password,salt);
//     this.password=hashedPassword;
// });

const users = mongoose.model('users',userSchema);
module.exports= users;