//MONGOOSE CONNECTION TO DATABASE 1.0-------------------------------------------------------

const express = require("express"); //ADDING EXPRESS CODING
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const attendanceRoute = require("./controller/attendanceRoute");
const empRoute = require("./controller/empRoute");

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://minute48:minute48@minute.cabboby.mongodb.net/MDB");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());




//MIDDLEWARE--------------------------
app.use("/attendanceRoute",attendanceRoute);
app.use("/empRoute",empRoute);


app.listen(4000,()=>{
    console.log("Server started at 40000");
})
//---------------------------------------------------------------------------