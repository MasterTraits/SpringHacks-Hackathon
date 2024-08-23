"use client";

// COMPONENTS
import ArticleHeader from "@/components/discover/ArticleHeader";
import Course from "@/components/discover/Course";
import CoursePref from "@/components/discover/CoursePref";
import Link from "next/link";

// UTILS
import clsx from "clsx";
import { useContext } from "react";
import { UserContext } from "./layout";

// ICONS
import { BsBell, BsSearch } from "react-icons/bs";

export default function page() {
  const [searchContent, setSearchContent] = useContext(UserContext);

  return (
    <main className="h-[92vh] overflow-y-auto bg-background overflow-hidden">
      {/* INTRODUCTORY */}
      <section className="relative mb-6 p-7 w-full">
        <img
          className="top-0 left-0 absolute z-0 w-full h-full object-cover filter brightness-[40%]"
          src="https://cdn.library.vanderbilt.edu/wp-content/uploads/2023/08/heard-home-02.jpg"
        />

        {/* NOTIFICATION BELL */}
        <Link
          href="/notif"
          className={clsx("absolute top-9 right-8", { indicator: true })}
        >
          {/* REMOVE `badge-success` TO REMOVE COLOR IN NOTIFICATION*/}
          <span className="indicator-item badge badge-success text-xs">0</span>
          <BsBell className="content text-2xl" />
        </Link>

        {/* HEADER BAR */}
        <div className="z-10">
          <h1 className="flex justify-start mb-4 p-2 text-5xl tracking-tight font-semibold leading-tight">
            Advance
            <br /> Your Career
          </h1>
          <h1 className="absolute text-wrap top-7 mb-4 p-2 text-5xl tracking-tight font-bold leading-tight">
            Advance
            <br /> Your Career
          </h1>
        </div>
        {/* SEARCH BAR */}
        <form className="mb-3 flex justify-center gap-2 z-10">
          <input
            type="search"
            placeholder="Search here"
            value={searchContent}
            onChange={(e) => setSearchContent(e.target.value)}
            className="input text-sm bg-neutral-50 w-full text-black rounded-full z-10"
          />

          <Link
            href="/discover/catalog"
            type="submit"
            className="btn rounded-full z-10 bg-background outline-white"
          >
            <BsSearch className="text-xl" />
          </Link>
        </form>
      </section>

      {/* TOPICS PART */}
      <article className="mb-7">
        <ArticleHeader text="Topics" referral="" />
        <div className="overflow-hidden h-12">
          <div className="flex h-32 overflow-y-auto whitespace-nowrap">
            {/* { Fetch data here using .map() } */}
            <button className="btn btn-outline ml-5 font-bold rounded-full outline-white outline-4 text-white">
              Generative AI
            </button>
          </div>
        </div>
      </article>

      {/* MY COURSES */}
      <article className="mb-7">
        <ArticleHeader text="My Courses" referral="" />
        <div className="overflow-hidden h-56">
          <div className="flex h-60 overflow-y-auto whitespace-nowrap">
            {/* { Fetch data here using .map() } */}
            <Course
              name="Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential"
              organization="Coursera"
              type="With Certificate"
            />
            <Course
              name="Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential"
              organization="Coursera"
              type="With Certificate"
            />
          </div>
        </div>
      </article>

      {/* BASED ON YOUR PREFERENCES */}
      <article className="mb-7">
        <ArticleHeader text="Based on Your Preferences" referral="" />
        <div className="carousel h-full mx-5 rounded-xl lg:w-full">
          {/* MAP DATA */}
          <CoursePref
            image={``}
            topic={`Psychology`}
            name={`Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential`}
            organization={`Youtube University`}
            rating={`4.5`}
            type={`Certification`}
            description={`Depictions of Pokémon similar to Baltoy have been found on the walls of caves where primitive humans lived. See`}
          />
        </div>
      </article>

      <article className="mb-7">
        <ArticleHeader text="My Courses" referral="" />
        <div className="overflow-hidden h-56">
          <div className="flex h-60 overflow-y-auto whitespace-nowrap">
            {/* { Fetch data here using .map() } */}
            <Course
              name="Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential"
              organization="Coursera"
              type="With Certificate"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
