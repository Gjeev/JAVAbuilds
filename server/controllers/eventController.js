const event = require('../models/eventModel');
const bcrypt = require('bcrypt');

async function makeEvent (req, res) {
    try{
    let dataObj = req.body;
    let event = await event.create(dataObj);
    res.json({
        message : "Event Created",
        data: event
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
        event.findAll().then((events) => res.status(200).send(events));
    }
    catch (err){
        return res.json({
            message : err.message
        });
    }
}