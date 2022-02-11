import React from 'react';
import {AiOutlineSetting} from 'react-icons/ai'
import {FiGrid,FiMenu} from 'react-icons/fi'
import { useSelector } from 'react-redux';
const Header = ({showSidebar,setShowSidebar}) => {

    const user = useSelector(state=>state.user?.user?.user)
  return (
  <div className='flex items-center justify-between w-full p-3 bg-white shadow-md border-gray border-b-1 '>
  <div className="flex items-center justify-center">
      <div onClick={()=>setShowSidebar(!showSidebar)} className="flex items-center justify-center cursor-pointer  py-3  rounded-full hover:bg-gray-200">
      <FiMenu className='text-gray-500 text-2xl mx-3 font-bold'/>
      </div>
      <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
      <h3 className='text-gray-500 font-semibold'>Keep</h3>
  </div>
  <div className="flex bg-gray-200 w-2/6 rounded-md items-center justify-center p-3 h-11/12">

  <input type="text" className='w-4/5 bg-gray-200 w-full h-full outline-none border-0'/>
  </div>
  <div className="flex items-center justify-evenly">
      <div className="flex items-center justify-between mx-2">
      <AiOutlineSetting className='text-gray-500 mx-3 text-2xl font-bold'/>
      <FiGrid  className='text-gray-500 text-2xl mx-3 font-bold'/>
      </div>
      <div className="flex items-center justify-center rounded-full w-10 mx-2">
          <img src={user.picture} alt="profile" className='rounded-full' />
      </div>
  </div>

  </div>);
};

export default Header;
