require("dotenv").config();
import express from 'express';
import cors from 'cors';

const app=express();

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT || 5000,()=>console.log("Server is running..."))