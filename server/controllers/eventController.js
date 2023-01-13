const event = require('../models/eventModel');
const bcrypt = require('bcrypt');

function makeEvent (req, res) {
    try{
    let dataObj = req.body;
    let event = event.create(dataObj);
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
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;

        const query = {"date" : currentDate}
        event.find(query).then((events) => res.status.send(events))
    }
    catch (err){
        return res.json({
            message : err.message
        });
    }
}
module.exports={
    makeEvent,
    readEvents
}