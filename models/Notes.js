const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    color:{
        type:String,
        default:'#fff'
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    }
},{
    timestamps:true
})
module.exports= mongoose.model('Note',notesSchema)