const express = require('express');
const notesRouter= express.Router()
const asyncHandler= require('express-async-handler');
const Notes = require('../models/Notes');

notesRouter.get('/',asyncHandler(async(req,res)=>{
console.log(req.query.userId) 
const notes = await Notes.find({userId:req.query.userId})
res.send(notes);
}))

notesRouter.post('/',asyncHandler(async(req,res)=>{
   
    const newNote =new Notes({
        title:req.body.title,
        text:req.body.text,
        userId:req.body._id,
        color:req.body.color,

    })
    
    const note = await newNote.save()
    res.send(note);
}))

notesRouter.put('/:id',asyncHandler(async(req,res)=>{
const note = await Notes.findById(req.params.id)
if(note){
    note.title=req.body.title
    note.text=req.body.text
    note.color=req.body.color
    const upadtedNote = await note.save()
    res.send(upadtedNote)
}
else{
    res.status(404).send({message:'Note not found!..'})
}
}))

notesRouter.delete('/:id',asyncHandler(async(req,res)=>{
      await Notes.findByIdAndDelete(req.params.id)
      res.send(req.params.id)
}))


module.exports=notesRouter;