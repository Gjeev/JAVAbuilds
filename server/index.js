import express from 'express';
import mongoose from "mongoose";

// import { connect } from 'mongoose';
// require('dotenv').config();
import dotenv from "dotenv";

import userRoutes from './routes/userRoute.js';
import bookingRoutes from './routes/userBooking.js';

// import { urlencoded } from 'body-parser';
// import cookieParser from 'cookie-parser';
// import session from 'express-session';
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
const PORT = 3000;

// app.use(json());
// app.use(urlencoded({extended:true}));
// app.use(cookieParser());
// app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use(
//     session({
//         // loggedIn bool
//         key:'user_sid',
//         secret: process.env.SECRET,
//         resave:false,
//         saveUninitialized:false,
//         cookie:{
//         // check maxAge
//             expires:100000
//         }
//     })
// )

app.use('/user',userRoutes);
app.use('/booking',bookingRoutes);


mongoose.connect(process.env.DB_LINK,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log("MongoDB connected successfully on 3000"))
)
	.catch((err) => console.log(`MongoDB connection failed: ${err}`));
    

