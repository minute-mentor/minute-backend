const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
    "fullname": {type:String},
    "email": {type:String},
    "phone": {type:String},
    "role": {type:String},
    "password": {type:String},
    "dob": {type:String},
    "gender": {type:String},
    "addr": {type:String}
    
},{
    collection:"EMP"
})

module.exports = mongoose.model("empSchema",empSchema);



