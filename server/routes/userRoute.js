const express = require('express');
const router = express.Router();

const {
    getSignUp,
    getLogIn,
    postLogIn,
    postSignUp,
    getLogOut,
    protectUserRoute
} = require('../controllers/userController');

const {
    makeEvent,
    readEvents,
    getUsersEvent,
}= require("../controllers/eventController")

const eventController
 = require('../controllers/eventController')

router.get('/logIn',getLogIn);
router.post('/logIn',postLogIn);
router.get('/signUp',getSignUp);
router.get('/logOut',protectUserRoute,getLogOut);
router.post('/signUp',postSignUp);
router.post('/booking',makeEvent);
router.post('/events' ,readEvents);
router.get('/usrEvt', getUsersEvent);

module.exports=router;