import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI); // Simply pass the URI without options
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
