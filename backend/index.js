const express=require('express');
import cors from "cors";
import dotenv from "dotenv";

const app= express();

dotenv.config()
const PORT=3000;

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`)
})

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world')
})