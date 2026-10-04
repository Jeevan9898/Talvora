const mongoose = require("mongoose");
const connectDB = async()=>{
    if(!process.env.MONGO_URI){
        throw new Error("MONGO_URI is not configured. Add it to Render Environment Variables.");
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected : ${conn.connection.host}`);
};

module.exports = connectDB;