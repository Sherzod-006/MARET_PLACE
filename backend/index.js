// IMPORTING DEPENDENCIES
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// IMPORTING ROUTES

//------------ USING DEPENDENCIES
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// CONNECTING TO DATABASE
import connectDB from './configuration/db.js';
connectDB()

//------------ API ROUTERS

//------------ ERROR HANDLERS

//------------ LISTENING TO PORT
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}...`);
})