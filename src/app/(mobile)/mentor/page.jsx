'use client'
import { GoSearch } from "react-icons/go";
import React from 'react';
// import { useRouter } from 'next/navigation';
import MentorMessages from "@/components/mentorMessage";
import Router from 'next/router'


const MentorPage = () => {
  // const router = useRouter();

  // const handleMentorClick = (mentorId) => {
  //   router.push(`/mentor/${mentorId}`);
  // };


  function mentorDetails () {
    Router.push({
      pathname: '/mentor/mentorId',
      query: {
        mentorname,
        profile,
      }
    })
  }

  return (
    <main>
      <nav className='flex items-center justify-between bg-card px-5 py-4'>
        <img className='h-10 w-auto' src='/IMAGES/HireMentor.png' />
        <h1 className="font-semibold text-lg">Mentors</h1>
        <button>
          <GoSearch className='text-[2.75rem] bg-black p-2 rounded-3xl' />
        </button>
      </nav>

      <section className="h-screen bg-background px-5 py-3">
        {/* <div onClick={() => handleMentorClick('Michael Reeves')} > */}
        <div>
          <MentorMessages
            key='Michael Reeves'
            time='1:00pm'
            profile='IMAGES/USERPFP.JPG'
            mentorName='Michael Reeves'
          />
        </div>

        <button onClick={() => mentorDetails} className="btn">wawawa</button>

      </section>
    </main>
  );
};

export default MentorPage;