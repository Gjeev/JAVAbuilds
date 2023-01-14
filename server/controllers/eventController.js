import { bookings } from "../models/bookingModel.js";
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_KEY);
// storeItems
async function makeEvent (req, res) {
    try{
    let dataObj = req.body;
    let events = await bookings.create(dataObj);
    res.json({
        message : "Event Created",
        data: events
    });
    }
    catch (err){
        return res.json({
            message : err.message
        });
    }
}

async function readEvents (req, res) {
    try {
        // send date from frontend in body
        let checkDate;
        if(req.body.date==null){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        checkDate=currentDate;
        }
        else{
            checkDate=req.body.date;
        }
        const query = {"date" : checkDate}
        await bookings.find(query).then((events) => res.send({
            data : events
        }))
    }
    catch (err){
        return res.json({
            message : err.message
        });
    }
}
async function getUsersEvent (req, res) {
    try{
        const query = { "enrollnum" : req.body.enrollnum}
        await bookings.find(query).then((events) => res.json({ 
            message : events
        })).catch((err) => {
            return res.json({
                message : err.message
            })
        })
    }
    catch (err) {
        return res.json({
            message : err.message
        });
    }
}
// write code for PAY BUTTON = BOOK NOW?? in frontend
// onclick -> handleCheckout -> post request -> sync routes with backend
// -> send user ID(token) in post request, if you are storing user in state
// make checkoutSuccess page in frontend
// component bnao and app.js me route path bnao
// token access from req body, then find enrollnum from token db
// client url??
const YOUR_DOMAIN='http://localhost:3000'; // change the port -> client
const PRICE_ID=10;
async function createCheckoutSession(req, res){
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      // define success and cancel urls
      success_url: `${YOUR_DOMAIN}/booking/checkout-session`,
      cancel_url: `${YOUR_DOMAIN}/booking`,
    });
  
    res.send({url:session.url});
  }

module.exports={
    makeEvent,
    readEvents,
    getUsersEvent,
    createCheckoutSession
}


