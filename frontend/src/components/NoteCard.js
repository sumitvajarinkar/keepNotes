import React,{useState} from 'react';
import {BiDotsVertical} from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { deleteNote } from '../actions/note';
import EditModal from './EditModal';
const NoteCard = ({title,text,color,id,setColor}) => {
  const [show,setShow]=useState(false)
const [showEdit,setShowEdit]=useState(false)
  const dispatch =useDispatch()

  const handleAddToStar=()=>{
    setShow(false)
  }
  const handleEdit=()=>{
 setShow(false)
 setShowEdit(true)
  }
  const handleDelete=()=>{
  dispatch(deleteNote(id))
  setShow(false)
  }
  return (
    <>
      <div className='flex m-3 flex-col relative max-w-sm items-start rounded-md  justify-start py-2 w-72 px-6 border border-gray-300 ' style={{background:color}}>
          <h3 className='text-xl py-2 font-bold text-gray-800'>{title}</h3>
          <p>{text}</p>
          <div onClick={()=>setShow(true)} className="flex items-center mt-2 mr-2 absolute top-0 right-0 justify-center cursor-pointer rounded-full p-2 hover:bg-gray-200">
            <BiDotsVertical/>
          </div>
          <div className={`cursor-pointer z-10 ${show?'visible':'invisible'} absolute top-0 right-0 bg-white shadow-md flex flex-col p-3`}>
            <p className='p-2 text-gray-500 hover:bg-gray-200'>Add To Star</p>
            <p className='p-2 text-gray-500 hover:bg-gray-200'>Pin</p>
            <p onClick={handleDelete} className='p-2 text-gray-500 hover:bg-gray-200'>Delete</p>
            <p onClick={handleEdit}  className='p-2 text-gray-500 hover:bg-gray-200'>Edit</p>
          </div>
      </div>
      <EditModal showEdit={showEdit} setShowEdit={setShowEdit} title={title} text={text} color={color} id={id} setColor={setColor}/>
      </>
  );
};

export default NoteCard;
