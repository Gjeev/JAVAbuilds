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

router.get('/logIn',getLogIn);
router.post('/logIn',postLogIn);
router.get('/signUp',getSignUp);
router.get('/logOut',protectUserRoute,getLogOut);
router.post('/signUp',postSignUp);
router.post('/booking', postBooking);

module.exports=router;