import mongoose from "mongoose";


export const connectDB = async() => {
    try{

      const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB connected: ${conn.connection.host}`);


    }catch(error){

      
       console.log("MongoDB connection error",error) 



    }
}

// export const connectDB = async () => {
//     try {
//       const mongoUri = process.env.MONGODB_URL;
//       if (!mongoUri) {
//         throw new Error("MONGODB_URL is not defined in the environment variables");
//       }
  
//       const conn = await mongoose.connect(mongoUri);
//       console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//       console.error("MongoDB connection error:", error.message);
//     }
//   };
  