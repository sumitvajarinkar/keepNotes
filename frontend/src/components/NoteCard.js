import React from 'react';

const NoteCard = ({title,text,color}) => {
  return (
      <div className='flex m-3 flex-col max-w-sm items-start rounded-md  justify-start py-2 w-72 px-4 border border-gray-300 ' style={{background:color}}>
          <h3 className='text-xl py-2 font-bold text-gray-800'>{title}</h3>
          <p>{text}</p>
      </div>
  );
};

export default NoteCard;
