const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoute');
const bookingRoutes = require('./routes/bookingRoute');
const cors= require('cors');
const PORT = 3000;
const app=express();
app.use(express.json());
app.use(cors());
app.use('/user',userRoutes);
app.use('/booking',bookingRoutes);
mongoose.connect(process.env.DB_LINK,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log("MongoDB connected successfully on 3000"))
)
	.catch((err) => console.log(`MongoDB connection failed: ${err}`));
    

