"use client";

import { PiArrowLeft } from "react-icons/pi";
import { BsFilter, BsSearch, BsX } from "react-icons/bs";
import Link from "next/link";
import { useState, useContext } from "react";
import { UserContext } from "../layout";

import ShortCourse from "@/components/discover/ShortCourse";

export default function page() {
  const [searchContent, setSearchContent] = useContext(UserContext);

  const [text, removeText] = useState({
    state: false,
    context: searchContent,
  });

  if (searchContent.length > 0) {
    text.state = true;
  } else {
    text.state = false;
  }

  function Change() {
    setSearchContent("");
  }

  return (
    <main className="h-[92vh] bg-background">
      <header className="mb-5 px-5 pt-5 flex gap-2 items-center justify-between">
        <Link href="/discover">
          <PiArrowLeft className="text-4xl" />
        </Link>
        <div className="relative w-full">
          <input
            type="search"
            value={text.context}
            onChange={(e) =>
              removeText({ state: true, context: e.target.value })
            }
            className="pl-12 input input-bordered text-sm bg-neutral-50 w-full text-black rounded-full z-10"
            placeholder="Search here"
          />
          <BsSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl text-neutral-800" />
          {text.state && (
            <BsX
              onClick={() => removeText({ state: false, context: "" })}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-2xl p-0.5 bg-card rounded-full"
            />
          )}
        </div>
      </header>
      <section className="overflow-hidden h-12">
        <container className="overflow-y-auto whitespace-nowrap h-16 mb-2 flex gap-2 px-4">
          {/* <div className="dropdown dropdown-bottom">
            <button tabIndex={0} role="button" className="btn rounded-full bg-white text-black font-extrabold hover:bg-neutral-300">Filter<BsFilter/></button>
            <ul tabIndex={0} className="mt-3 dropdown-content menu bg-white text-black rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Activities</a></li>
              <li><a>Messages & Calls</a></li>
              <li><a>Friend Requests</a></li>
              <li><a>Streak</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div> */}
          {/* MAP HERE */}
          <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-full">
            Generative AI
          </button>
          <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-full">
            Generative AI
          </button>
          <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-full">
            Generative AI
          </button>
          <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-full">
            Generative AI
          </button>
        </container>
      </section>

      <article className="mt-8 grid grid-cols-2 px-4 justify-items-center">
        <ShortCourse
          name="Example"
          organization="Example"
          rating="Example"
          type="Example"
        />
        <ShortCourse
          name="Example"
          organization="Example"
          rating="Example"
          type="Example"
        />
        <ShortCourse
          name="Example"
          organization="Example"
          rating="Example"
          type="Example"
        />
        <ShortCourse
          name="Example"
          organization="Example"
          rating="Example"
          type="Example"
        />
      </article>
    </main>
  );
}
