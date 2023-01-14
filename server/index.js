const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser=require('body-parser');
const userRoutes = require('./routes/userRoute');
const bookingRoutes = require('./routes/bookingRoute');
var cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/user',userRoutes);
app.use('/booking',bookingRoutes);


mongoose.connect(process.env.DB_LINK,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log("MongoDB connected successfully on 3000"))
)
	.catch((err) => console.log(`MongoDB connection failed: ${err}`));
    

