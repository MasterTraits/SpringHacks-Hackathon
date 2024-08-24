import React from 'react'

const MentorProfBtn = (props) => {
  return (
    <div>             
    <button className='bg-none ring-2 ring-black text-black font-bold t rounded-3xl px-3 py-1 hover:cursor-pointer'>{props.name}</button>
    </div>
  )
}

export default MentorProfBtn