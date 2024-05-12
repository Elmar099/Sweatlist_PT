import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        return 
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbname: "share_routine",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
}