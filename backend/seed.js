require('dotenv').config();
const connectDB =  require("./db/connection");
const express = require("express");
const app = express();

const mongoose = require('mongoose');
const Product = require('./models/product');
const sampleProducts = require('./sampleData/sampleProducts');


/* middlewares */
app.use(express.json());
 

const port = process.env.PORT ? parseInt(process.env.PORT,10) : 4000;
const seed = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('✅ MongoDB connected.');

        await Product.deleteMany({});
        console.log('🗑️ Existing products deleted.');

        await Product.insertMany(sampleProducts);
        console.log('🌱 Sample products inserted.');
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}
seed();