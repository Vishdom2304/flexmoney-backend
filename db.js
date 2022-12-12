const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://vishdom2304:sabkamalik1@cluster0.xxxphxe.mongodb.net/flexyoga?retryWrites=true&w=majority"

const connectToMongo = () =>{
  mongoose.connect(mongoURI).then(()=>{
    console.log("DB Connected");
  }).catch((err)=>console.log(err));
}

module.exports = connectToMongo;