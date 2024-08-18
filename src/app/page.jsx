
import Divider from "@/assets/Divider"
import Link from 'next/link'

export default function page() {
  return (
    <main className='h-screen flex flex-col justify-between items-center bg-background p-5'>
      <Divider output="absolute w-full overflow-hidden bottom-0 object-cover  opacity-50"/>
      <h1 className="text-xl mt-3">EduSphere</h1>
      <img className="h-60 w-60" src={``}/>
      <div>
        <h2 className="text-center text-4xl font-bold mb-4">Welcome to EduSphere!</h2>
        <p className="text-center text-lg text-neutral-500 max-w-md mx-5">
          Labore exercitation nostrud dolore minim id. Fugiat aute exercitation commodo. 
        </p>
      </div>
      <div className="w-11/12 mb-7 *:rounded-full *:text-lg *:w-full z-10 text-center">
        <Link href="/login" className="btn mb-3 max-w-sm">Login</Link><br/>
        <Link href="/register" className="btn bg-card max-w-sm">Register</Link>
      </div>
      
    </main>
  )
}

