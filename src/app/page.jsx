import Divider from "@/assets/Divider"
import Link from 'next/link'
import Image from "next/image"


export default function page() {

  return (
    <main className='h-screen flex flex-col justify-between items-center bg-background p-5'>
      <Divider output="absolute w-full overflow-hidden bottom-0 object-cover  opacity-50"/>
      <h1 className="text-xl mt-3">EduSphere</h1>
      <Image src='/Cat.svg' alt="cat image" width={240} height={240} priority/>
      <div>
        <h2 className="text-center text-4xl font-bold mb-4">Welcome to EduSphere!</h2>
        <p className="text-center text-lg text-neutral-500 max-w-md mx-5">
          Labore exercitation nostrud dolore minim id. Fugiat aute exercitation commodo. 
        </p>
      </div>
      <div className="w-11/12 mb-7">
        <Link href="/login" className="btn mb-3 max-w-sm rounded-full text-lg w-full z-10 text-center">Login</Link><br/>
        <Link href="/register" className="btn bg-card max-w-sm rounded-full text-lg w-full z-10 text-center">Register</Link>
      </div>
    </main>
  )
}

