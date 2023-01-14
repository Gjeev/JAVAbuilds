import { Schema, model } from 'mongoose';
import { validate as _validate } from 'email-validator';
// const bcrypt = require('bcrypt');

const userSchema = new Schema({
    enrollnum : {
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
        validate: function() {
            return emailValidator.validate(this.userEmail);
        }
    }
});

// userSchema.pre('save', async function(){
//     // this.confirmPassword = undefined;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password,salt);
//     this.password=hashedPassword;
// });

const users = model('users',userSchema);
export default users;