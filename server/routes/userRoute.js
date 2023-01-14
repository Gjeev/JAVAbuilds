const express = require('express');
const router = express.Router();

const {
    login,signup,logout
}=require('../controllers/userController')

// router.get('/logIn',getLogIn);
router.post('/login',login);
// router.get('/signUp',getSignUp);
router.post('/signUp',signup);

router.delete('/logout',logout)

module.exports = router;