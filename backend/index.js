const express=require('express');
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";

const app= express();

dotenv.config()
const PORT=3000;
connectDB(process.env.MONGO_URL);

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`)
})

app.use(cors());
app.use(express.json());
app.use("/auth",authRoutes)

app.get('/',(req,res)=>{
    res.send('hello world')
})