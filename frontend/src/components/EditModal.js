import React,{useState} from 'react'
import {BiUserPlus,BiImage,BiPin} from 'react-icons/bi'
import {IoColorPaletteOutline} from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { upadteNote } from '../actions/note'
const EditModal = ({showEdit,setShowEdit,title,text,color,id}) => {
    
    const [show,setShow]=useState()
    const [newTitle,setTitle]=useState(title)
    const [newText,setNewText]=useState(text)
    const [newColor,setColor]=useState(color)
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
     dispatch(upadteNote(id,newTitle,newText,newColor))
     setShowEdit(false)
    }
  return (
    <div onClick={()=>setShowEdit(false)} className={`w-screen z-50 fixed top-0 left-0 h-screen flex items-center justify-center bg-gray-200 ${showEdit?'visible':'invisible'}`}>
    <div className=" w-1/3 bg-white shadow-md  rounded-sm" onClick={(e)=>e.stopPropagation()}>
    <form onSubmit={handleSubmit} className=' relative w-full flex flex-col items-center justify-center' >
       <div className=" w-full p-2 rounded-md  shadow-lg drop-shadow-lg p-3 flex flex-col" style={{background:newColor}}>
        <input  value={newTitle} onChange={(e)=>setTitle(e.target.value)} type="text" className="w-full h-full p-2 my-2 outline-none" name="title" placeholder='Tile' />
        <input  value={newText} onChange={(e)=>setNewText(e.target.value)} type="text" className="w-full h-full p-2 my-2 outline-none" name="text" placeholder='Take a note' />
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
    </div>
    </div>
  )
}

export default EditModal