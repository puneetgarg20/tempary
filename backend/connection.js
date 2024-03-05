const mongoose = require("mongoose");


 function connection () {
     mongoose.connect("mongodb://localhost:27107/mydatabase").then(()=>{console.log("database connectred")}).catch((e)=> console.log(e));
}

