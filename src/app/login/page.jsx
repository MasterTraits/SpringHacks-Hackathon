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
    <main className="h-screen flex justify-center bg-background">
      {/* The Background Image */}
      {/* <img className="absolute h-screen w-full object-cover object-right z-[0]" src="https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg"/> */}
      <Divider output="absolute w-full overflow-hidden bottom-0 object-cover"/>

      {/* The Content Itself */}
      <div className="flex flex-col justify-between items-center w-12/12 p-5 py-7 *:z-20">
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
          
          <button className="btn w-full max-w-md mt-10 mb-7 rounded-full">Sign In</button> 
          <div className="flex justify-evenly *:h-12 *:w-12 *:bg-card *:rounded-full *:p-2 ">
            <img className="z-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"/>
            <img className="z-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"/>
            <img className="z-20" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"/>
          </div>
        </div>
        {/* Empty mf */}
        <div></div>
      </div>
    </main>
  );
}
