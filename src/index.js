import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

// import { connectDB } from "./lib/db.js";
import { connectDB } from "./lib/db.js";


import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
// using import and modular somuse .js extension while importing

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser())




app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes)



app.listen(PORT,()=>{
    console.log("Server is running on PORT" + PORT)
    connectDB()
})