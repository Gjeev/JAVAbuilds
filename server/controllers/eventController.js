const bookings = require("../models/eventModel")
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_KEY);
// const tokens = require("../models/token")
// storeItems
async function makeEvent (dataObj) {
    // let ifCreated=false;
    try{
    console.log(dataObj);
    let events = await bookings.create(dataObj);
    console.log('Event Created');
    console.log(events);
    // ifCreated=true;
    }
    catch (err){
        console.log(err)
        // ifCreated=false;
    }
    // return ifCreated;
}
// async function makeEvent (req,res) {
//     try{
//     const dataObj=req.body;
//     let events = await bookings.create(dataObj);
//     console.log('Event Created');
//     res.json({
//         data:events
//     })
//     }
//     catch (err){
//         res.json({
//             message:err.message
//         })
//     }
// }

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
        //console.log(typeof(checkGame));
        
        const query = {"date" : checkDate, "game":checkGame}
        //console.log(query)
        const events = await bookings.find(query);
        //const events = await bookings.find()
        //console.log(events)
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

        
        // const user = await tokens.findOne({"token":token});
        // console.log(user)
        // const enrollnum=user.enrollnum;
        // console.log(enrollnum)
        const query = {"enrollnum" : req.body.enrollnum}
        const events = await bookings.find(query);
        //console.log(events)
        res.json({
            data:events
        })
    }
    catch (err) {
        return res.json({
            message : err.message
        });
    }
}

const PRICE_ID=500;
async function createCheckoutSession(req, res){
    const enrollnum=req.body.enrollnum;
    const date= req.body.date;
    const time = req.body.time;
    const game = req.body.game;
    const table= req.body.game;
    const bookInfo = req.body.bookInfo;
    const code = req.body.code;
    // console.log(req.body)
    // console.log(enrollnum);
    const customer = await stripe.customers.create({
        metadata:{
            enrollnum : enrollnum,
            date:date,
            time:time,
            game:game,
            table:table,
            bookInfo:bookInfo,
            code:code
        }
    })
    
    const session = await stripe.checkout.sessions.create({
      customer : customer.id,
      line_items: [
        {
          price_data:{
            currency:"inr",
            product_data:{
                name:"Slot Booking"
            },
            unit_amount:PRICE_ID,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // define success and cancel urls
      success_url: `${process.env.YOUR_DOMAIN}/booking/checkout-session`,
      cancel_url: `${process.env.YOUR_DOMAIN}/booking`,
    });
  
    res.send({url:session.url});
    let dataObj=req.body;
    // if(session.url==`${YOUR_DOMAIN}/booking/checkout-session`){
    //     makeEvent(dataObj);
    // }
    //if url == success => keep events db as it is
    // if url == cancel/failure => delete that event document from db
    // check completed or incompleted
  }
// ===
module.exports={
    makeEvent,
    readEvents,
    getUsersEvent,
    createCheckoutSession
}


