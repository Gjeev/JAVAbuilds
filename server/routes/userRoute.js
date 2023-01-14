const express = require('express');
const router = express.Router();

// const {
//     getSignUp,
//     getLogIn,
//     postLogIn,
//     postSignUp,
//     getLogOut,
//     protectUserRoute
// } = require('../controllers/userController');
// import {logIn,signIn} from '../controllers/userController';
// import { login, signup } from '../controllers/userController.js';
const {
    login,signup,logout
}=require('../controllers/userController')
// const {
//     makeEvent,
//     readEvents
// }= require("../controllers/eventController")

// const eventController
//  = require('../controllers/eventController')

// router.get('/logIn',getLogIn);
router.post('/login',login);
// router.get('/signUp',getSignUp);
// router.get('/logOut',protectUserRoute,getLogOut);
router.post('/signUp',signup);
// router.post('/booking',makeEvent);
// router.post('/events' ,readEvents);
router.delete('/logout',logout)

module.exports = router;