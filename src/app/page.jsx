import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen absolute w-screen bg-gradient-to-t from-white to-black top-0 left-0 z-[-5] flex justify-center items-center">
      <div className="w-6/8">
        <h1 className="text-center text-3xl font-bold mb-7 z-10">Welcome</h1>
        <h2 className="text-center text-xl mb-5 z-10">Sign-In</h2>

        <input className="mb-5" radius="lg" size="md" type="email" label="email" color="default" isRequired/>
        <input className="mb-7" size="md" type="password" radius="lg" label="password" color="default" isRequired/>
        <Link href="/forgotpass" className="underline cursor-pointer z-10">Forgot Password?</Link>
        
      </div>
    </main>
  );
}


