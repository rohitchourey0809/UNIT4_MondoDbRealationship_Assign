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
const sectionScheme = new mongoose.Schema(
    {
    BOOKNAME:{type :String,required:true},
    // book_id : {type:moongoose.Schema.Types.ObjectId}
    },

    {
        versionKey : fasle,
        timestamps:true 
    })

//step-2 ---Create Model Schema
const Section = mongoose.model("section",sectionScheme)

//<--------------------bookschema------->
// {Title: "The Struggle of FailureBoy",required:true}
const bookSchema = new mongoose.Scheme({

    BOOKNAME:{type: String,required:true},
    BODY:{type: String,required:true},
    section_id:{ type:mongoose.Schema.Types.ObjectId,
                 ref:"section",
                 required:true }
},
{
    versionKey : fasle,
    timestamps:true 
})
 
const Book = mongoose.model("book",bookSchema)
// <-----------------------------authorSchema-------------->
const authorSchema = new mongoose.Scheme({
    
    user_id : {type:mongoose.Schema.Types.ObjectId,
        ref:"user",required:true}           


},
{
    versionKey : false,
    timestamps:true 
})

const Author = mongoose.model("author",authorSchema)


// <-------------Users------------------>
const userSchema = new mongoose.Schema({
    firstname : {type:String,required:true},
    lastname : {type:String,required:true}
},
{
    versionKey : false,
    timestamps:true 
})

const User = new mongoose.Model("user",userSchema)

// <-------------bookauthorSchema--------------->

const bookauthorSchema = new mongoose.Schema(
    {
    book_id: {type:String,required:true,ref:"book"},
    author_id: {type:String,required:true}
    },
    {
        versionKey : false,
        timestamps:true 
    })


    const Bookauthor = new mongoose.Model("bookauthor",bookauthorSchema)


app.listen(5000,async()=>{
    try{
        await connect();
        
    }
    catch(err){
        console.log(err);
    }
    console.log("Listening on port 5000")
})
