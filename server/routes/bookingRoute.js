import { Router } from 'express';
const router = Router();

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
// const {
//     makeEvent,
//     readEvents
// }= require("../controllers/eventController")
import {getBooking, postBooking} from '../controllers/eventController.js';
// const eventController
//  = require('../controllers/eventController')

// router.get('/logIn',getLogIn);
// router.post('/login',login);
// router.get('/signUp',getSignUp);
// router.get('/logOut',protectUserRoute,getLogOut);
// router.post('/signUp',signup);
router.post('/',postBooking);
// router.get('/events' ,readEvents)

export default router;