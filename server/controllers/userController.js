// const users = require('../models/userModel');
import users from '../models/userModel.js';
// const bcrypt = require('bcrypt');
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { INVALID_CREDENTIALS, USERNAME_DNE, USER_ALREADY_EXISTS } from '../constants/index.js';
// const { INVALID_CREDENTIALS, USERNAME_DNE, USER_ALREADY_EXISTS } = require('../constants/index.js')
// async function getSignUp (req,res) {
//     try{
//     // send the frontend signup 
//     await res.json({
//         message : "Sign Up!"
//     });
//     }
//     catch(err){
//         res.json({
//             message : err.message
//         });
//     }
// }

// async function getLogIn (req,res) {
//     try{
//     // send the frontend login
//     await res.json({
//         message : "Log In!"
//     });
//     }
//     catch(err){
//         res.json({
//             message : err.message
//         });
//     }
// }

export const signup = async (req,res) => {
    const {enrollnum , password , userEmail } = req.body;
    try {
        const existingUser = await users.findOne({enrollnum});

        if(existingUser)
            return res.status(403).json({message:USER_ALREADY_EXISTS});


        const hashedPassword= await bcrypt.hash(password,12);

        const result= await users.create({enrollnum,password: hashedPassword,userEmail})
        const token= jwt.sign({enrollnum: enrollnum,id: result._id},'test',{expiresIn:"1h"});
        res.status(200).json({ result, token})
    } catch (error) {
        // res.status(500).json({message:'Something went wrong.'});
        console.log(error);
    }
    
}

export const login = async (req,res) => {
try {
    const {email, password} = req.body;
    try {
        const existingUser= await users.findOne({email});
        if(!existingUser)
            return res.status(401).json({message:USERNAME_DNE});

        const isPasswordCorrect= await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect)
            return res.status(401).json({message:INVALID_CREDENTIALS});
        const token=jwt.sign({email: existingUser.email, id: existingUser._id}, 'test',{expiresIn:"1h"});//move test to env
        res.status(200).json({ result: existingUser, token})
    } catch (error) {
        res.status(500).json({message:'Something went wrong.'});
    }
    
}
catch(err){
    res.json({
        message : err.message
    });
}
// res.json({msg: "login user"});
}

// async function getLogOut (req,res) {
//     try{
//     console.log(req.session);
//     req.session.destroy();
//     //console.log(req.session);
//     await res.json({
//         message : "Logged Out!"
//     });
//     //render login page
//     }
//     catch(err){
//         res.json({
//             message : err.message
//         });
//     }
// }

// function protectUserRoute(req,res,next){
//     // client logged in or not
//         let flag = req.session;
//         if(flag){
//             next();
//         }
//         else{
//             return res.json({
//                 message : "Operation accessible to only Clients"
//             })
//         }
//     }

