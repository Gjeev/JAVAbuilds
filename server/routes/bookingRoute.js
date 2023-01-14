import { Router } from 'express';
const router = Router();

import {makeEvent, readEvents, getUsersEvent,createCheckoutSession} from '../controllers/eventController.js';
// add middleware to check if logged in
router.post('/',makeEvent);
router.post('/',readEvents);
router.post('/',getUsersEvent);
router.post('/create-checkout-session',createCheckoutSession);

export default router;