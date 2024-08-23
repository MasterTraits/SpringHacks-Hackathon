import React from 'react'

const MentorMessage = (props) => {
  return (
    <div className="flex items-center gap-4">
       <span>
        <img className='h-[4rem]  bg-white rounded-full p-[3px]' src={props.profile}/>
        </span> 
        <span>
            <h1 className='font-light text-lg'>{props.name}</h1>
        <div className='flex items-center'>
            <p className='font-light text-sm'>{props.message}</p>
            <p className='font-light text-sm text-texttime'>{props.time}</p>
        </div>
        </span>
    </div>
  )
}

export default MentorMessage
