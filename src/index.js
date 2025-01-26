import express from "express";
import dotenv from "dotenv"

// import { connectDB } from "./lib/db.js";
import { connectDB } from "./lib/db.js";


import authRoutes from "./routes/auth.route.js"
// using import and modular somuse .js extension while importing

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth",authRoutes);



app.listen(PORT,()=>{
    console.log("Server is running on PORT" + PORT)
    connectDB()
})