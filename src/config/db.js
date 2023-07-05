// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import { MONGO_URI } from './serverConfig.js';

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

export { connectDB };