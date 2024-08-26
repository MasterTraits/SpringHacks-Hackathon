'use client'
import { GoSearch } from "react-icons/go";
import React from 'react';
import { useRouter } from 'next/navigation';
import Router from 'next/router'
import MentorMessages from '@/components/mentor/mentorMessage'

const MentorPage = () => {
  const router = useRouter();


  const handleMentorClick = (mentorId) => {
    router.push(`/mentor/${mentorId}`);
  };

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
        <div onClick={() => handleMentorClick('Michael Reeves')}>
          <MentorMessages
            key='Michael Reeves'
            time='1:00pm'
            profile='IMAGES/USERPFP.JPG'
            mentorname='Michael Reeves'
            message='wawawa'
          />
        </div>
      </section>
    </main>
  );
};

export default MentorPage;