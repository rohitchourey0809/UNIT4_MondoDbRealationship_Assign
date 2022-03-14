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
    BOOKNAME:{Title: "The Struggle of FailureBoy",required:true},
    book_id : {type:moongoose.Schema.Types.ObjectId}
},
{
   timestamps:true 
})

//step-2 ---Create Model Schema
const Section = mongoose.model("section",sectionScheme)

//<--------------------bookschema------->
// {Title: "The Struggle of FailureBoy",required:true}
const bookSchema = new mongoose.Scheme({

    BOOKNAME:{type: String,required:true},
    section_id:{ type:mongoose.Schema.Types.ObjectId,
                 reference:"section",
                 required:true }
})
 
const Book = mongoose.model("book",bookSchema)
// <-----------------------------authorSchema-------------->
const authorSchema = new mongoose.Scheme({
    book_id : {type:mongoose.Schema.Types.ObjectId,
               reference:"book",required:true},
    user_id : {type:mongoose.Schema.Types.ObjectId,
        reference:"user",required:true}           


})

const Author = mongoose.model("author",authorSchema)

app.listen(5000,async()=>{
    try{
        await connect();
        
    }
    catch(err){
        console.log(err);
    }
    console.log("Listening on port 5000")
})
