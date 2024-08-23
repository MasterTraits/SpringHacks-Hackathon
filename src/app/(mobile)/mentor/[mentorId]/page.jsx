'use client'

import { useRouter } from 'next/navigation';


const MentorChatPage = () => {

const router = useRouter()  
    const {
      query: {mentorname, profile},
  
    } = router
  
    const props = {
      profile,
    }
  

// needs data base to fetch data placeholder muna wala muna to
  return (
    <main>
      <nav className='flex items-center justify-between bg-card px-5 py-4'>
        <img className='h-10 w-auto' src='/IMAGES/HireMentor.png' />
        <h1 className="font-semibold text-lg">Chat with {props.mentorname}</h1>
      </nav>
      {/* chatting here */}
      <section className="h-screen bg-background px-5 py-3">
      <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">It was you who would bring balance to the Force</div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">Not leave it in Darkness</div>
</div>
      </section>
    </main>
  );
};

export default MentorChatPage;