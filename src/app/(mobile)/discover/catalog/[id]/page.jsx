"use client";

// TAKE NOTE, PLEASE ENCRYPT THE ID BEFORE ADDING TO THE PATH
import { PiArrowLeft } from "react-icons/pi";
import { BsSearch, BsThreeDotsVertical, BsShare } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <main className="h-[92vh] bg-background">
      <img src="" className="absolute z-[-1]" />
      <header className="h-96 bg-gradient-to-t from-black to-transparent p-5">
        <nav className="flex justify-between">
          <PiArrowLeft
            onClick={() => router.back()}
            className="text-4xl text-black "
          />
          <div className="flex gap-1 *:p-2 *:rounded-full *:bg-navbar *:text-4xl">
            <BsSearch />
            <BsShare />
            <BsThreeDotsVertical />
          </div>
        </nav>
      </header>
    </main>
  );
}
