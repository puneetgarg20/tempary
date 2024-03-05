const express =require("express");
const mongoose=require("mongoose");

const app = express();
const cors= require("cors");
const {newmodal} =require("./schema.js");
// const  {connection}=require ( "./connection.js");
const PORT =5000;

app.use(cors());
app.use(express.json());
// connection();
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
    // bufferCommands: false, // Disable command buffering
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("database connected") }).catch((e) => console.log(e,"databse not connected"));
//  const data = new newmodal({ name: "Aman", age: 23, occupation: "SDE-2" });
//   data.save();


app.get("/getdata",(req,res)=>{
  // console.log("REQUEST COME");
    
    newmodal.find().then((data)=>{
       // console.log(data);
        res.send(data);
    }).catch((err)=>{
        res.send("Not Fetched");
    })
});

app.post("/postdata", (req, res) => {
    console.log("REQUEST COME");
    //const data= req.json().then((data)=>data).catch((err)=>console.log(err));
   // req.json().then((res)=>{console.log(res)}).catch((err)=>console.log(err));
    console.log(req.body);
    const data= new newmodal(req.body);
    data.save();
    res.json({msg:"hello"});
});

app.delete("/delete/:id",(req,res)=>{
     console.log("delete request come");
     console.log(req.params.id);
     newmodal.deleteOne({_id:req.params.id}).then((data)=>{
           res.send({msg:"data deleted",num:data});
     }).catch((e)=>console.log(e));

});



app.listen(PORT,()=>{
    console.log("server is running on port number : 4000");
})