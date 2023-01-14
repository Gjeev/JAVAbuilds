const express = require('express');
const router = express.Router();

const {
    makeEvent,
    readEvents,
    getUsersEvent,
    createCheckoutSession
}= require("../controllers/eventController")
router.post('/create',makeEvent);
router.post('/',readEvents);
router.post('/',getUsersEvent);
//router.post('/create-checkout-session',createCheckoutSession);
require('dotenv').config();
// const endpointSecret = process.env.ENDPOINTSECRET;
// router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
//     const sig = req.headers['stripe-signature'];
  
//     let event;
//     let data;
//     try {
//       event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//       console.log("webhook verified")
//     } catch (err) {
//       res.status(400).send(`Webhook Error: ${err.message}`);
//       return;
//     }
//     data = event.data.object;
//     // Handle the event
//     switch (event.type) {
//       case 'payment_intent.succeeded':
//         const paymentIntent = event.data.object;
//         stripe.customers.retrieve(data.customer).then((customer)=>{
//           console.log(customer);
//           console.log(data);
//         }
//         )
//         // Then define and call a function to handle the event payment_intent.succeeded
//         break;
//       // ... handle other event types
//       default:
//         console.log(`Unhandled event type ${event.type}`);
//     }
  
//     // Return a 200 response to acknowledge receipt of the event
//     res.send();
//   });
  
  module.exports=router;

