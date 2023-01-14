// const users = require('../models/userModel');
//import users from "../models/userModel.js";
const users = require("../models/userModel");
//import token from "../models/token.js";
const token = require("../models/token");
const bcrypt = require("bcrypt");
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");
const {
  INVALID_CREDENTIALS,
  USERNAME_DNE,
  USER_ALREADY_EXISTS,
} = require("../constants/index");
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
async function addToken(usertoken, enrollnum) {
  try {
    let dataObj = { token: usertoken, enrollnum: enrollnum };
    let tokens = await token.create(dataObj);
    return "Success";
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
}

async function checkToken(token, enrollnum) {
  try {
    // const query = { token: req.body.token, enrollnum: req.body.enrollnum };
    const query = { token: token, enrollnum: enrollnum };
    await token
      .find(query)
      .then((token) => {
        if (token != null) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => err.message);
  } catch (err) {
    return err.message;
  }
}

const signup = async (req, res) => {
  const { enrollnum, password, userEmail } = req.body;
  try {
    const existingUser = await users.findOne({ enrollnum });

    if (existingUser)
      return res.status(403).json({ message: USER_ALREADY_EXISTS });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await users.create({
      enrollnum,
      password: hashedPassword,
      userEmail,
    });
    const token = jwt.sign({ enrollnum: enrollnum, id: result._id }, "test", {
      expiresIn: "1h",
    });
    await addToken(token, enrollnum);
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
    // console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { enrollnum, password, usertoken } = req.body;
    try {
      
      // checkToken(usertoken, enrollnum).then((msg) => {
        
      //   if (msg === true) {
      //  console.log(
      //     "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
      //   );
      //     res.json({ result: existingUser });
      //   }
      // }).catch((err) => res.json({message:err.message,}));
      if(usertoken != null){
        const query = { token: usertoken };
        token.find(query).then((tk) => {
          if(tk != null){

          res.json({message : tk})
        }
      })
      }
      const existingUser = await users.findOne({ enrollnum });
      if (!existingUser) return res.status(401).json({ message: USERNAME_DNE });

      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordCorrect)
        return res.status(401).json({ message: INVALID_CREDENTIALS });

      const genToken = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        "test",
        { expiresIn: "1h" }
      ); //move test to env

      res.status(200).json({ result: existingUser, genToken });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
  // res.json({msg: "login user"});
};


const logout = async (req, res) => {
  try {
    const { usertoken } = req.body;
    try {
      const query = {"token" : usertoken}
      token.findOneAndDelete(query).then((msg) => res.json({message: "success in deleting"}) ).catch((err) => res.json({message : err.message}))
    } catch (err) {
      res.status(500).json({ message: "Something went wrong." });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};


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

module.exports = {
  addToken,
  checkToken,
  login,
  signup,
  logout,
};
