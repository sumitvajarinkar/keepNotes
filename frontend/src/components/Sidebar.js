import React from 'react';
import {AiOutlineBulb,AiOutlineBell} from 'react-icons/ai'
import {VscPinned} from 'react-icons/vsc'
import {BsCheckBox} from 'react-icons/bs'
import {Link,useLocation} from 'react-router-dom'
const Sidebar = ({showSidebar}) => {
  const location =useLocation();
  const path = location.pathname
  return (
  <div className={`${showSidebar?'w-1/5':'w-auto'} transition-all ease-in-out delay-150 flex mt-6 font-bold text-md text-gray-800 flex-col px-3 h-fullmy-3 `}>
      <Link to="/"><div className={`${path==='/'&&'bg-yellow-200'} w-full p-3  my-2   flex items-center justify-start rounded-r-2xl hover:bg-yellow-200`}>
       <AiOutlineBulb className='text-2xl font-bold mr-3'/> {showSidebar&&<p>Notes</p>}
      </div></Link>
      <Link to="/pined"><div className={`${path==='/pined'&&'bg-yellow-200'} w-full p-3 my-2  flex items-center justify-start rounded-r-2xl hover:bg-yellow-200`}>
       <VscPinned className='text-2xl font-bold mr-3'/> {showSidebar&&<p>Pined</p>} 
      </div></Link>
      <Link to="/reminder"><div className={`${path==='/reminder'&&'bg-yellow-200'} w-full p-3 my-2  flex items-center justify-start rounded-r-2xl hover:bg-yellow-200`}>
        <AiOutlineBell className='text-2xl font-bold mr-3'/>{showSidebar&&<p>Reminder</p>}                  
      </div></Link>
      <Link to="/completed"><div className={` ${path==='/reminder'&&'bg-yellow-200'} w-full p-3 my-2 flex items-center justify-start rounded-r-2xl hover:bg-yellow-200`}>
       <BsCheckBox className='text-2xl font-bold mr-3'/>  {showSidebar&&<p>Completed</p>}
      </div></Link>
      
  </div>);
};

export default Sidebar;
