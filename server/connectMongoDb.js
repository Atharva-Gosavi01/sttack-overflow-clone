import mongoose from "mongoose";

const connectDB = async () => {
  console.log('Attempting to connect to MongoDB at:', process.env.CONNECTION_URL);
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
