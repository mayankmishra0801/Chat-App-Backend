import express from "express";
import authRoutes from "./routes/auth.route.js"
// using import and modular somuse .js extension while importing


const app = express();


app.use("/api/auth",authRoutes)



app.listen(5001,()=>{
    console.log("Server is running on port 5001")
})