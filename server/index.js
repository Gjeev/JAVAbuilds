const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoute');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());
app.use(
    session({
        // loggedIn bool
        key:'user_sid',
        secret: process.env.SECRET,
        resave:false,
        saveUninitialized:false,
        cookie:{
        // check maxAge
            expires:100000
        }
    })
)

app.use('/user',userRoutes);

mongoose.connect(process.env.DB_LINK).then(() => console.log("MongoDB connected successfully"))
	.catch((err) => console.log(`MongoDB connection failed: ${err}`));
    
app.listen(PORT);
