const mongoose = require("mongoose");


const myschema= new mongoose.Schema(
    {
        name:String,
        age:Number,
        occupation: String
    }
);

const newmodal = mongoose.model("newmodal", myschema);

module.exports={ newmodal };
