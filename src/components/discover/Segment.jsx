'use client'

import { useState } from 'react'
import { GoMilestone } from 'react-icons/go'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import Lesson from './Lesson'

export default function Segment({name, duration, lesson, lessonDuration, overall}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div 
        onClick={()=> setShow(!show)}
        className={`${show ? "border-2 border-white flex" : ""} flex gap-2 justify-between items-center bg-navbar w-full p-4 rounded-xl hover:bg-card`}
      >
        <div className='flex gap-3'>
          <GoMilestone className="text-5xl p-2 bg-card rounded-full"/>
          <div>
            <h3 className="font-bold text-md">{name}</h3>
            <p className="text-neutral-600 text-sm">{duration}</p>
          </div>
        </div>
        <label className="text-3xl">
          {/* this hidden checkbox controls the state */}
          {show ? <BiChevronUp className="text-3xl"/> : <BiChevronDown className="text-3xl"/>}
        </label>
      </div>
      {show && (
        <div className="flex flex-col gap-2">
          <Lesson lessonName={lesson} lessonDuration={lessonDuration} overallLessons={overall}/>
          <Lesson lessonName={lesson} lessonDuration={lessonDuration} overallLessons={overall}/>
          <Lesson lessonName={lesson} lessonDuration={lessonDuration} overallLessons={overall}/>
        </div>
      )} 
    </>
  );
}
