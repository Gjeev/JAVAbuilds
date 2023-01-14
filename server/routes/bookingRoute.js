import { Router } from 'express';
const router = Router();

import {makeEvent, readEvents, getUsersEvent,createCheckoutSession} from '../controllers/eventController.js';
// add middleware to check if logged in
//router.post('/',makeEvent);
router.post('/',readEvents);
router.post('/',getUsersEvent);
router.post('/create-checkout-session',createCheckoutSession);
require('dotenv').config();
const endpointSecret = process.env.ENDPOINTSECRET;
router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    const sig = request.headers['stripe-signature'];
  
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("webhook verified")
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  });
  

export default router;