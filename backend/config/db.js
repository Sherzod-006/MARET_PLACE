import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully...`);
    } catch (error) {
        console.error(`MongoDB Connection Failed: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;