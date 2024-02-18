const express=require("express");
const app =express();
const port=8080;
const Listing=require("./models/listing.js")
const path=require("path");



app.get("/",(req,res)=>{
  res.send("working")
})
//testing
app.get("/testListing",async (req,res)=>{
  let sampleTesting=new Listing(
    {
      title:"My New Villa",
      description:"By The Beach",
      price:1200,
      location:"Calangute,Goa",
      country:"India"
    }
  );
  await sampleTesting.save();
  console.log("sample was saved");
  res.send("successful testing")



})

app.listen(port,()=>{
  console.log(`app is listening on ${port}`);
})
const mongoose = require('mongoose');

main().then(()=>{
  console.log("database connected")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');


}