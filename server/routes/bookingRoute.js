const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

const {
    makeEvent,
    readEvents,
    getUsersEvent,
    createCheckoutSession
}= require("../controllers/eventController")
router.post('/create',makeEvent);
router.post('/',readEvents);
router.post('/userevent',getUsersEvent);
router.post('/create-checkout-session',createCheckoutSession);
require('dotenv').config();
const endpointSecret=null;
//const endpointSecret = process.env.ENDPOINTSECRET;
router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
    const sig = req.headers['stripe-signature'];
    let data;
    let eventType;
    if(endpointSecret){
      let event;
      try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        console.log("webhook verified")
      } catch (err) {
        console.log(err.message)
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }
    data=event.data.object;
    eventType=event.type;
  }
  else{
    data = req.body.data.object;
    eventType=req.body.type;
    //console.log(eventType);
  }
    // Handle the event
    if(eventType==="checkout.session.completed"){
      stripe.customers.retrieve(data.customer).then(
        async(customer)=>{
          const dataObj = customer.metadata;
          console.log(dataObj)
          makeEvent(dataObj);
          //console.log(dataObj);
        }
      ).catch((err)=>{
        console.log(err);
      })
    }
  
    // Return a 200 response to acknowledge receipt of the event
    res.send().end();
  });
  
  module.exports=router;

