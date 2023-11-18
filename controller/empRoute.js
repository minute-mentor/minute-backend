const express = require("express");
const mongoose = require("mongoose");

const empSchema= require("../model/empSchema");
const empRoute = express.Router();

//get routes
empRoute.get("/",(req,res)=>{
    empSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

//Signup Routes
empRoute.post("/create-emp",(req,res)=>{
    empSchema.create(req.body,
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);

    })
})

//Delete Routes
empRoute.delete("/delete-emp/:id",(req,res)=>{
    empSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

//Edit Routes
empRoute.route("/update-emp/:id")
.get((req,res)=>{

    
    empSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    empSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});



module.exports = empRoute;