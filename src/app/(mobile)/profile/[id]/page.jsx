"use client";

// COMPONENTS
import ProfileBtn from "@/components/profile/profilebuttons";
import Certificate from  "@/components/discover/Certificate";

// ICONS
import { React, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { GoBell } from "react-icons/go";
import { PiGraduationCap } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { BsBriefcase, BsThreeDotsVertical } from "react-icons/bs";

// UTILIS
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  // change this to actual code in db
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const router = useRouter();

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <main className="h-[92vh] overflow-y-auto ">
      <section className="max-h-full p-6 bg-gradient-to-b from-white to-background">
        <nav className="flex items-center justify-start gap-3 *:hover:cursor-pointer">
          <div className="grow">
            <button type="button" onClick={() => router.back()}>
              <FaArrowLeft className="text-3xl text-black" />
            </button>
          </div>
          <GoSearch className="profileXcourseNavButton" />
          <GoBell className="profileXcourseNavButton " />
          <IoSettingsOutline className="profileXcourseNavButton" />
        </nav>

        <br />

        <article className="">
          {/* CURRENT PFP IS A PLACEHOLDER CHANGE THE CODE SO THAT IT CAN TAKE IMAGES FROM THE DB */}
          <span>
            <img
              src="/IMAGES/USERPFP.jpg"
              className="mb-3 h-28 w-auto border-white border-4 rounded-full object-cover"
            />
            <h1 className="font-bold text-5xl">Michael Reeves</h1>
          </span>
          {/* BTNS IN PAGE */}
          <div className="mb-3 flex flex-wrap pt-2 items-center gap-2">
            {authenticated && <ProfileBtn name="Apply to mentor" />}
            <ProfileBtn name="Follow" />
            <BsThreeDotsVertical className="text-3xl p-1.5 text-black bg-white rounded-full "/>
          </div>
          {/* USER TAGS */}
          <p className="text-btnWhite hover:cursor-pointer text-sm">
            69x Hackathon Winner | Founder | CEO | Full-Stack Developer | CISSP
            | STUDENT | NBI | HACKATHON GODS |
            MVP | Grand Master | High ELO | 
          </p>
        </article>
      </section>

      <section className="pt-1 pb-10 bg-background px-6">
        {/* IS DEPENDENT ON USER FETCHING */}
        <div className="mb-1 flex items-center gap-2">
          <span className="flex gap-2">
            <PiGraduationCap className="text-lg text-white " />
            <p className="text-xs">
              Studying at Rizal Technological University
            </p>
          </span>
        </div>
        {/* SPANNING FROM THIS  */}
        <div className="flex items-center gap-2">
          <span className="flex gap-2">
            <BsBriefcase className="text-lg text-white " />
            <p className="text-xs">
              Works at Rizal Technological University
            </p>
          </span>
        </div>
        
        <br />

        <div className="mb-4 flex items-center justify-between ">
          <h1 className="bg-btnWhite text-md text-center text-black font-bold rounded-3xl px-3 py-1">
            About
          </h1>
          <span className=" flex justify-center items-center bg-card text-xs text-white rounded-3xl px-3 py-[5px] gap-1">
            <LuUser className="flex justify-items-center" />
            <p className="pt-[1px] text-sm">This is mapped</p>
          </span>
        </div>
        <div className="flex">
          <p className="mb-3    text-sm">
            {showFullText
              ? text
              : `${text.split(" ").slice(0, 50).join(" ")}...`}
            <button
              onClick={toggleText}
              className={`ml-2 ${showFullText ? "text-green" : "text-green"}`}
            >
              {showFullText ? "See Less" : "See More"}
            </button>
          </p>
        </div>
        <hr className="text-neutral-700"/>
        
        
        <div className="mt-6 mb-2 flex items-center justify-between ">
          <h1 className="border-btnWhite border-2 text-md text-center text-white font-bold rounded-3xl px-3 py-1">
            Certifications
          </h1>
        </div>
        <div className="flex flex-col">
          <Certificate name="" organization="" date="" link=""/>
          <Certificate name="" organization="" date="" link=""/>
          <Certificate name="" organization="" date="" link=""/>
        </div>
        <hr className="text-neutral-700"/>
        
      </section>


    </main>
  );
};

export default ProfilePage;
