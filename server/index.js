import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/userRoute.js';
import bookingRoutes from './routes/bookingRoute';
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
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
    

