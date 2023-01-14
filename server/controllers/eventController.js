// require('dotenv').config();
// const stripe = require('stripe')(process.env.STRIPE_API_KEY);
// const eventModel=require("../models/eventModel");
// const userModel=require("../models/userModel");

// //async function createSession

import { bookings } from "../models/bookingModel.js";

// const bcrypt = require('bcrypt');

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
        await event.find(query).then((events) => res.json({ 
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


module.exports={
    makeEvent,
    readEvents,
    getUsersEvent
}


