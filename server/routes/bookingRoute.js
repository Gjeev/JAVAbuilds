const express = require('express');
const router = express.Router();


const {
    makeEvent,
    readEvents
}= require("../controllers/eventController")
// const {makeEvent}=require("../controllers/eventController")
// const eventController
//  = require('../controllers/eventController')

// router.get('/logIn',getLogIn);
// router.post('/login',login);
// router.get('/signUp',getSignUp);
// router.get('/logOut',protectUserRoute,getLogOut);
// router.post('/signUp',signup);
router.post('/',makeEvent);
// router.get('/events' ,readEvents)

module.exports=router;