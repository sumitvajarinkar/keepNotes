import React, { useRef, useState ,useEffect} from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import {BiUserPlus,BiImage,BiPin} from 'react-icons/bi'
import {IoColorPaletteOutline} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { addNote, getNote } from '../actions/note';
import NoteCard from '../components/NoteCard';
const Home = () => {
  const [show,setShow]=useState(false)
  const [color,setColor]=useState("#fff")
  const inputRef=useRef('')
  const textRef=useRef('')

  const dispatch =useDispatch()
 const notes = useSelector(state=>state.allNotes.noteItems)
  useEffect(()=>{
    dispatch(getNote())
  },[dispatch])
useEffect(()=>{
setShow(false)
},[color])
  const handleSubmit=(e)=>{
     e.preventDefault()
     dispatch(addNote(inputRef.current.value,textRef.current.value,color))
     inputRef.current.value="";
     textRef.current.value="";
     setColor('#fff')
  }
  return( <>
  <Header/>
  <div className="flex  width-full">
    <Sidebar/>
    <div className="flex flex-col w-4/5 px-4 py-16">
   <form onSubmit={handleSubmit} className=' relative w-full flex flex-col items-center justify-center' >
       <div className=" w-1/2 p-2 rounded-md  shadow-lg drop-shadow-lg p-3 flex flex-col" style={{background:color}}>
        <input ref={inputRef}  type="text" className="w-full h-full p-2 my-2 outline-none" name="title" placeholder='Tile' />
        <input ref={textRef} type="text" className="w-full h-full p-2 my-2 outline-none" name="text" placeholder='Take a note' />
        <div className="w-full text-gray-600 cursor-pointer font-bold flex items-center justify-evenly">
         <div className="p-3 rounded-full hover:bg-gray-200">
         <BiUserPlus className='text-2xl'/>
         </div>
         <div className="p-3 rounded-full hover:bg-gray-200 " onClick={()=>setShow(true)}>
         <IoColorPaletteOutline className='text-2xl'/>
         </div>
         <div className="p-3 rounded-full hover:bg-gray-200 ">
         <BiImage className='text-2xl'/>
         </div>
         <div className="p-3 rounded-full hover:bg-gray-200 ">
         <BiPin className='text-2xl'/>
         </div>
         <button className="py-2 text-white font-bold px-4 bg-yellow-400 shadow-xl rounded-md">
          Submit
         </button>
           </div>

           
       </div>
       <div className={`w-screen h-screen fixed top-0 left-0  ${show?'visbile':'invisible'}`} onClick={()=>setShow(false)}>
       <div onClick={(e)=>e.stopPropagation()} className="flex items-center justify-center  bg-white absolute py-8 px-3 top-80 left-1/2 shadow-2xl">
             <div  onClick={()=>setColor('#ccff90')} className="p-3 cursor-pointer rounded-full  mx-2" style={{backgroundColor:'#ccff90'}}>
               
             </div>
             <div onClick={()=>setColor('#cbf0f8')} className="p-3 cursor-pointer rounded-full bg-#a7ffeb mx-2"  style={{backgroundColor:'#cbf0f8'}}>

             </div>
             <div onClick={()=>setColor('#a7ffeb')} className="p-3 cursor-pointer rounded-full bg-#a7ffeb mx-2" style={{backgroundColor:'#a7ffeb'}} >

             </div>
             <div onClick={()=>setColor('#f28b82')} className="p-3 cursor-pointer rounded-full bg-#a7ffeb mx-2" style={{backgroundColor:'#f28b82'}}>

             </div>
             <div onClick={()=>setColor('#e8eaed')} className="p-3 cursor-pointer rounded-full bg-#a7ffeb mx-2" style={{backgroundColor:'#e8eaed'}}>

             </div>
           </div>
           </div>
      
   </form>
   <div className="flex mt-16  flex-wrap items-start justify-start">
      {
       notes.map((note)=>(
         <NoteCard key={note._id} title={note.title} text={note.text}  color={note.color} id={note._id} />
       )) 
      }
    </div>
    </div>
   
  </div>
  </>)
};

export default Home;
