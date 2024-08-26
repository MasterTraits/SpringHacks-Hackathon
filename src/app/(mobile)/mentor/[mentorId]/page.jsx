'use client'
import runChat from "@/config/gemini";
import { FaArrowLeft } from 'react-icons/fa'
import { IoCallOutline, IoCameraOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { GoCopilot } from "react-icons/go";
import MessageFromMentor from '@/components/mentor/messageFromMentor';
import MessageFromUser from '@/components/mentor/messageFromUser';
import MentorProfile from '@/components/mentor/mentorProfile';
import { useState } from "react";
import { useRouter } from "next/navigation";

const MentorChatPage = () => {

  const router = useRouter();

  const onSent = async () => {
    await runChat(input)

    setresultData("")
    setLoading(true)
    setrecentPrompt(input)
    setShowResult(true)
    const response = await runChat(input)
    setresultData(response)
    setLoading(false)
    setinput("")
  }


  const [input, setinput] = useState("")
  const [recentPrompt, setrecentPrompt] = useState("")
  const [previousPrompt, setPreviousPrompt] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setresultData] = useState("")


  return (
    <main>
      <nav className='flex items-center justify-between bg-card px-5 py-4 mb-0 drop-shadow-md '>
        <button type='button' onClick={() => router.back()}>
          <FaArrowLeft className='text-lg' />
        </button>
        {/*  details of mentors here just route this */}

        <MentorProfile
          picture='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
        />
        <h1 className="font-light text-lg">Michael Reeves</h1>
        <IoCallOutline className='bg-background p-2 text-5xl rounded-3xl ' />
        <IoCameraOutline className='bg-background p-2 text-5xl rounded-3xl' />
      </nav>
      {/* chatting here */}

      <section className="h-screen bg-background px-5 py-3">

        {/* {!showResult ? (
      <div className="flex flex-col items-center justify-center h-[80%] w-auto">
      <span className="flex flex-col items-center justify-center">
        <GoCopilot className="text-[8rem] text-green bg-card p-5 rounded-full" />
        <h1 className="text-[2rem] font-light">Any questions?</h1>
      </span>
    </div>
  ) : (
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={<GoCopilot/>} />
            <p>{recentPrompt}</p>
          </div>
        </div>
        <p ></p>
      </div>
  )}   */}

        {!showResult

          ?
          <div className="">
            <div className="flex flex-col items-center justify-center h-[80%] w-auto">
              <span className="flex flex-col items-center justify-center">
                <GoCopilot className="text-[8rem] text-green bg-card p-5 rounded-full" />
                <h1 className="text-[2rem] font-light">Any questions?</h1>
              </span>
            </div>
          </div>
          :
          <div className="">
            <div className="">

              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="">

              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
            <button onClick={() => onSent()}>
              <IoMdSend />
            </button>
          </div>


        }

        <div className=' flex sticky w-full p-3 items-center justify-between bg-card flexshadow-md rounded-lg'>
          <input onChange={(e) => setinput(e.target.value)} value={input}
            type="text"
            placeholder="Type a message..."
            className='p-1 rounded-full bg-card focus:outline-none focus:border-none '

          />


          <button onClick={() => onSent()}>
            <IoMdSend />
          </button>

        </div>
      </section>
    </main>

  );
}

export default MentorChatPage;