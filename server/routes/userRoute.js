import { Router } from 'express';
const router = Router();

import { login, signup } from '../controllers/userController.js';
router.post('/login',login);
// router.get('/logOut',protectUserRoute,getLogOut);
router.post('/signUp',signup);

export default router;