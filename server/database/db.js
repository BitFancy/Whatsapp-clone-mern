import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://chattingapp:1iUr4v2Dy99SUTVt@cluster0.7o2fcua.mongodb.net/`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting with databse', error.message);
  }
};

export default Connection;
