import Divider from "@/assets/Divider";
import Link from "next/link";

export default function Home() {
  return (
    // The Main Container
    <main className="h-screen flex justify-center
      bg-gradient-to-r from-blue-400 to-green-400"
    >

    {/* // The Background Image */}
    <img className="absolute h-screen object-cover object-right z-[0]" src="https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg"/>
      <Divider output="absolute overflow-hidden bottom-0"/>

    {/* // The Content Itself */}
      <div className="flex flex-col justify-between items-center w-7/8 p-5 py-5 *:z-20">
        <h1 className="text-xl mb-7">Welcome!</h1>
        <div>
          <h2 className="text-center text-2xl font-bold mb-5 ">Login</h2>
          <form>
            <input className="mb-4 input input-bordered bg-transparent w-full max-w-sm " 
              type="email" 
              placeholder="Email" 
              required
            />
            <br/>
            <input className="mb-7 input input-bordered bg-transparent w-full max-w-sm bg-white text-black " 
              type="password"  
              placeholder="Password"
            />
            <br/>
          </form>

          <Link href="/forgotpass" className="mb-10 underline ">Forgot Password?</Link>
          <br/>
            <div className="flex"> 
              <input type="checkbox" className="checkbox "/>
              <label>&nbsp; Remember Me</label>
            </div>

        </div>
        {/* Empty mf */}
        <div></div>
      </div>
      
      
    </main>
  );
}


