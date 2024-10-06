import express from "express";
// import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";

const port=5000;
const app=express()
app.use(cors());

mongoose.connect("mongodb://localhost:27017/PAS");

const adoptreqSchema=new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    address:String

})

const adoptreq=mongoose.model('adoptreq',adoptreqSchema);

app.use(express.json());

app.get("/",async(req,res)=>{
  const adoptreqs = await adoptreq.find();
   res.json(adoptreqs);
});

app.post("/",async(req,res)=>{
    console.log("Started");
    const {name,email,contact,address} = req.body;
    const adoptreq= new adoptreq({name,email,contact,address});
    await adoptreq.save();
    res.status(201).json(adoptreq);
});

// app.put('/:id',async(req,res)=>{
//     const {id}=req.params;
//     const updateduser=await Expense.findByIdAndUpdate(id,req.body,{new:true});
//     res.json(updateduser);
// });

app.delete('/:id',async(req,res)=>{
    const { id } = req.params;
    await adoptreq.findByIdAndDelete(id);
    res.sendStatus(204);
})
app.listen(port, () => {
    console.log('Server running at http://localhost:${port1}');
  });