'use client'

import Divider from "@/assets/Divider";
import Link from "next/link";
import { useState } from 'react'
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Home() {
  const [showpwd, setShowPwd] = useState({
    seepwd: false,
    text: "password"
  });  

  function togglePwd() {
    setShowPwd(prevState => ({
      seepwd: !prevState.seepwd,
      text: prevState.seepwd ? "password" : "text"
    }));
  }

  return (
    // The Main Container
    <main className="h-screen flex justify-center bg-gradient-to-r from-blue-400 to-green-400">
      {/* The Background Image */}
      <img className="absolute h-screen w-full object-cover object-right z-[0]" src="https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg"/>
      <Divider output="absolute w-full overflow-hidden bottom-0 object-cover"/>

      {/* The Content Itself */}
      <div className="flex flex-col justify-between items-center w-11/12 p-5 py-7 *:z-20">
        <h1 className="text-xl  mt-3">EduSphere</h1>
        <div>
          <h2 className="text-center text-2xl font-bold mb-5 ">Let's Sign You In!</h2>
          <form>
            <input className="mb-4 input input-bordered rounded-full bg-transparent w-full max-w-md" 
              type="email" 
              placeholder="Email" 
              required
            />
            <br/>
            <div className="relative">
              <input className="mb-7 input input-bordered rounded-full bg-transparent w-full max-w-md" 
                type={showpwd.text}  
                placeholder="Password"
                required
              />
              {showpwd.seepwd ? 
                <FiEye className="absolute top-4 right-4" onClick={togglePwd}/> 
              : <FiEyeOff className="absolute top-4 right-4" onClick={togglePwd}/>}
            </div>
          </form>
          
          <Link href="/forgotpass" className="underline text-sm">Forgot Password?</Link>
          <br/><br/>
          <div className="flex"> 
            <input type="checkbox" className="checkbox border-2 h-5 w-5" id="remember"/>
            <label className="text-sm" htmlFor="remember">&nbsp; Remember Me</label>
          </div>
          
          <button className="btn w-full max-w-md mt-10 rounded-full">Sign In</button> 

        </div>
        {/* Empty mf */}
        <div></div>
      </div>
    </main>
  );
}
