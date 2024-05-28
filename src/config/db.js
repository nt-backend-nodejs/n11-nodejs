import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB', process.env.MONGO_URI);
  } catch (error) {
    console.log('FAIL to MongoDB');
    process.exit(1)
  }
}

export default dbConnection
