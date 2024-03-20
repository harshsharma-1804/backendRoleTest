import mongoose from 'mongoose';
import { DB_name } from '../constants.js';

const connectDB = async () =>{
    try {
        const conncetionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)
        console.log(`MomgoDB connected at instance: , ${conncetionInstance.connection.host}`)
    } catch (error) {
        console.log("Error Connecting to the Database",error)
        process.exit(1)
    }
}

export default connectDB