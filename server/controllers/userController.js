const users = require('../models/userModel');
const bcrypt = require('bcrypt');

var session;
async function getSignUp (req,res) {
    try{
    // send the frontend signup 
    await res.json({
        message : "Sign Up!"
    });
    }
    catch(err){
        res.json({
            message : err.message
        });
    }
}

async function getLogIn (req,res) {
    try{
    // send the frontend login
    await res.json({
        message : "Log In!"
    });
    }
    catch(err){
        res.json({
            message : err.message
        });
    }
}

async function postSignUp (req,res) {
    try{
    let dataObj = req.body;
    let user = await users.create(dataObj);
    session = req.session;
    session.userEmail=req.body.userEmail;
    res.json({
        message : "User Signed Up",
        data : user
    });
    //redirect to dashboard
    }
    catch(err){
        //redirect to signup page on any error
        res.json({
            message : err.message
        });
    }
}

async function postLogIn (req,res) {
try {
    let enrollnum = req.body.enrollnum;
    let password = req.body.password;
    let user = await users.findOne({enrollnum : enrollnum});
    if(user){
        let hashedPassword=user.password;
        let flag=bcrypt.compare(password,hashedPassword);
        if(flag){
        session = req.session;
        session.enrollnum=req.body.enrollnum;
        console.log(session.enrollnum)
        return res.json({
            message : "User logged In"
        });
        // redirect to dashboard
    }
    else{
        return res.json({
            message : "Wrong Credentials"
        }) 
    }
    }
    else{
        return res.json({
            message : "User Not Found"
        })
    }
}
catch(err){
    res.json({
        message : err.message
    });
}
}

async function getLogOut (req,res) {
    try{
    console.log(req.session);
    req.session.destroy();
    //console.log(req.session);
    await res.json({
        message : "Logged Out!"
    });
    //render login page
    }
    catch(err){
        res.json({
            message : err.message
        });
    }
}

function protectUserRoute(req,res,next){
    // client logged in or not
        let flag = req.session;
        if(flag){
            next();
        }
        else{
            return res.json({
                message : "Operation accessible to only Clients"
            })
        }
    }

module.exports ={
    getSignUp,
    getLogIn,
    postLogIn,
    postSignUp,
    getLogOut,
    protectUserRoute
}