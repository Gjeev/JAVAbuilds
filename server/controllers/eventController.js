const bookings = require("../models/eventModel")
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_KEY);
// storeItems
// async function makeEvent (dataObj) {
//     let ifCreated=false;
//     try{
//     let events = await bookings.create(dataObj);
//     console.log('Event Created');
//     ifCreated=true;
//     }
//     catch (err){
//         ifCreated=false;
//     }
//     return ifCreated;
// }
async function makeEvent (req,res) {
    //let ifCreated=false;
    try{
    const dataObj=req.body;
    let events = await bookings.create(dataObj);
    console.log('Event Created');
    //ifCreated=true;
    res.json({
        data:events
    })
    }
    catch (err){
        //ifCreated=false;
        res.json({
            message:err.message
        })
    }
    return ifCreated;
}

async function readEvents (req, res) {
    try {
        // send date from frontend in body
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        let checkDate=req.body.date;
        let checkGame= req.body.game;
        console.log(typeof(checkGame));
        
        const query = {"date" : checkDate, "game":checkGame}
        console.log(query)
        const events = await bookings.find(query);
        //const events = await bookings.find()
        console.log(events)
        res.json({
            data : events
        });
    }
    catch (err){
        return res.json({
            message : err.message
        });
    }
}
async function getUsersEvent (req, res) {
    try{
        const token = req.body.usertoken;
        const user = await token.findOne({token:token});
        const enrollnum=user.enrollnum;
        const query = { "enrollnum" : enrollnum}

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
// write code for PAY BUTTON = Confirm Payment in frontend
// onclick -> handleCheckout -> post request -> sync routes with backend
// -> send user ID(token) in post request, if you are storing user in state
// make checkoutSuccess page in frontend
// component bnao and app.js me route path bnao
// token access from req body, then find enrollnum from token db
// client url??
// ===
// const YOUR_DOMAIN='http://localhost:5173'; // change the port -> client
// const PRICE_ID=10;
// async function createCheckoutSession(req, res){
//     const token = req.body.usertoken;
//     const user = await token.findOne({token:token});
//     const enrollnum=user.enrollnum;
//     const customer = await stripe.customers.create({
//         metadata:{
//             userId : enrollnum
//         }
//     })
//     const session = await stripe.checkout.sessions.create({
//       customer : customer.userId,
//       line_items: [
//         {
//           price: PRICE_ID,
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       // define success and cancel urls
//       success_url: `${YOUR_DOMAIN}/booking/checkout-session`,
//       cancel_url: `${YOUR_DOMAIN}/booking`,
//     });
  
//     res.send({url:session.url});
//     let dataObj=req.body;
//     if(session.url==`${YOUR_DOMAIN}/booking/checkout-session`){
//         makeEvent(dataObj);
//     }
//     //if url == success => keep events db as it is
//     // if url == cancel/failure => delete that event document from db
//     // check completed or incompleted
//   }
// ===
module.exports={
    makeEvent,
    readEvents,
    getUsersEvent,
    //createCheckoutSession
}


