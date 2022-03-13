const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

// <------connect mongodb with compass--->
// mongodb://127.0.0.1:27017/{databasename}

const connect = ()=>{
   return mongoose.connect("mongodb://127.0.0.1:27017/LIBRARYBOOK")
};


// <------------------------//section schemes------------------------->
//step-1 := Create section schema 
const sectionScheme = new mongoose.Schema({
    BOOKNAME:{Title: "The Struggle of FailureBoy",required:true}
},
{
   timestamps:true 
})

//step-2 ---Create Model Schema
const Section = mongoose.model("section",sectionScheme)

//<--------------------bookschema------->
const bookSchema = new mongoose.Scheme({
    BOOKNAME:{Title: "The Struggle of FailureBoy",required:true},
    section_id:{ Title:mongoose.Schema.Types.ObjectId,
                 reference:"section",
                 required:true }
})

app.listen(5000,async()=>{
    try{
        await connect();
        
    }
    catch(err){
        console.log(err);
    }
    console.log("Listening on port 5000")
})
