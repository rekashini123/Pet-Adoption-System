import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";

const port=5000;
const app=express()
app.use(cors());

mongoose.connect("mongodb://localhost:27017/PAS");

const userSchema=new mongoose.Schema({
    email:String,
    username:String,
    password:String
})

const Userdetail=mongoose.model('userdetails',userSchema);

app.use(express.json());

app.get("/",async(req,res)=>{
  const Userdetails = await Userdetail.find();
   res.json(Userdetails);
});

app.post("/",async(req,res)=>{
    console.log("Started");
    const {email,username,password} = req.body;
    const newuser= new Userdetail({email,username,password});
    await newuser.save();
    res.status(201).json(newuser);
});

app.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const updateduser=await Expense.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateduser);
});

app.delete('/:id',async(req,res)=>{
    const { id } = req.params;
    await Userdetail.findByIdAndDelete(id);
    res.sendStatus(204);
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });