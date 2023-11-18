
const express = require("express");
const mongoose = require("mongoose");

const attendanceSchema = require("../model/attendanceSchema");
const attendanceRoute = express.Router();


//get attendance------------------------------------
attendanceRoute.get("/",(req,res)=>{
    attendanceSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
//---------------------------------------------------

attendanceRoute.post("/create-a",(req,res)=>{
    attendanceSchema.create(req.body,
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);

    })
})

//Edit to add duration
attendanceRoute.route("/update-att/:id")
.get((req,res)=>{

    
    attendanceSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    attendanceSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});

module.exports = attendanceRoute;