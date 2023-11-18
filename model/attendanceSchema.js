
const mongoose = require("mongoose");
const attendanceSchema = new mongoose.Schema({
    "DATE": {type:String},
    "status": {type:String},
    "email":{type:String},
    "duration":{type:Number}
    
},{
    collection:"AC"
})

module.exports = mongoose.model("attendanceSchema",attendanceSchema);