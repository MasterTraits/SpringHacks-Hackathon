import { GoSearch } from "react-icons/go";
import React from 'react'
import MentorMessage from "@/components/mentorMessage";

const MentorPage = () => {
  return (
      <main>
        <nav className='flex items-center justify-between bg-card px-5 py-4'>
              <img className='h-10 w-auto' src='/IMAGES/HireMentor.png'/>
              <h1 className="font-semibold text-lg">Mentors</h1>
              <button
              // add onClick function
              >
              <GoSearch className='text-[2.75rem] bg-black p-2 rounded-3xl'/> 
              </button>
        </nav>

        <section className="h-screen bg-background px-5 py-3">
          <MentorMessage
          profile='IMAGES/USERPFP.JPG'
          name='Michael Reeves'
          message='testestest'
          />
        </section>

      </main>
  )
}

export default MentorPage
