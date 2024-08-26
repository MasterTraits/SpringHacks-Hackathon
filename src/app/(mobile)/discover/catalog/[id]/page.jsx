"use client";

// COMPONENTS
import Segment from "@/components/discover/Segment";

// ICONS
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSettingsOutline, IoLanguage } from "react-icons/io5";
import { GoSearch, GoMilestone, GoZap  } from "react-icons/go";
import { PiGraduationCap, PiCalendar } from "react-icons/pi";
import { BsStarFill, BsShare, BsHourglass, BsAsterisk, BsCameraVideo } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

// UTILIS
import { useRouter } from "next/navigation";

const page = () => {
  const [firstView, setfirstView] = useState(true);
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
      <section className="max-h-full p-6 relative z-10">
        <img
          src="https://cdn.e-rtu.edu.ph/Image_1.jpeg"
          className="top-0 left-0 absolute h-full w-full object-cover z-[-5]"
        />
        <div className="top-0 left-0 absolute h-full w-full object-cover z-[-4] bg-gradient-to-b from-transparent to-background" />
        <nav className="flex items-center justify-start gap-3 *:hover:cursor-pointer">
          <div className="grow">
            <button type="button" onClick={() => router.back().back()}>
              <FaArrowLeft className="text-3xl text-black" />
            </button>
          </div>
          <GoSearch className="profileXcourseNavButton" />
          <BsShare className="profileXcourseNavButton" />
          <IoSettingsOutline className="profileXcourseNavButton" />
        </nav>

        <br />

        <article>
          {/* CURRENT PFP IS A PLACEHOLDER CHANGE THE CODE SO THAT IT CAN TAKE IMAGES FROM THE DB */}
          <span>
            <img
              src="/IMAGES/RTU.png"
              className="mb-3 h-28 w-auto object-cover"
            />
            <h1 className="mb-3 font-bold text-3xl">
              Bachelor of Science in Information Technology
            </h1>
          </span>
          {/* USER TAGS */}
          <container className="flex justify-between items-end">
            <div>
              <div className="flex gap-2 items-centertext-btnWhite hover:cursor-pointer text-xs">
                <PiGraduationCap className="text-lg text-white " />
                <p>
                  Instrc. <u>Michael Jabbar</u>
                </p>
              </div>
              <div className="flex gap-2 items-centertext-btnWhite hover:cursor-pointer text-xs">
                <IoLanguage className="text-lg text-white " />
                <p>
                  Languages. <u>English, Filipino</u>
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <BsStarFill className="text-white" />
              4.2
            </div>
          </container>
        </article>
      </section>

      <section className="pt-1 pb-4 bg-background px-6">
        <br />
        <h1 className="mb-4 max-w-44 bg-btnWhite text-md text-center text-black font-bold rounded-3xl px-3 py-1">
          About the Course
        </h1>
        <div className="mb-3 flex">
          <p className="mb-2 text-sm">
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
        <article className="p-5 mb-5 h-68 w-full bg-card rounded-xl">
          <div className="mb-3 flex gap-2 items-center">
            <BsHourglass className="text-4xl p-1 bg-background rounded-full"/>
            <div>
              <h3 className="font-bold text-md">Takes 3 to 6 Months</h3>
              <p className="text-neutral-600 text-sm">Helps you be ready with practice</p>
            </div>
          </div>
          <div className="mb-3 flex gap-2 items-center">
            <PiCalendar className="text-4xl p-1 bg-background rounded-full"/>
            <div>
              <h3 className="font-bold text-md">Self-Paced Learning</h3>
              <p className="text-neutral-600 text-sm">Learning at your own pace.</p>
            </div>
          </div>
          <div className="mb-3 flex gap-2 items-center">
            <GoZap className="text-4xl p-1 bg-background rounded-full"/>
            <div>
              <h3 className="font-bold text-md">Easy for Beginners</h3>
              <p className="text-neutral-600 text-sm">For entry-level students</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <BsAsterisk className="text-4xl p-2 bg-background rounded-full"/>
            <div>
              <h3 className="font-bold text-md">Professional Certificate</h3>
              <p className="text-neutral-600 text-sm">Earn credibility</p>
            </div>
          </div>
        </article>
        <hr className="text-neutral-700" />

        {firstView && (
          <>
            <div className="my-5 flex items-center justify-between animate-">
              <h1 className="bg-btnWhite text-md text-center text-black font-bold rounded-3xl px-3 py-1">
                Topics
              </h1>
            </div>
            <section>
              <div className="flex flex-wrap gap-2 *:text-sm">
                {/* MAP HERE */}
                <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-xl">
                  Information Technology
                </button>
                <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-xl">
                  CISSP
                </button>
                <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-xl">
                  Data Structures and Algorithms
                </button>
                <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-xl">
                  DevOps
                </button>
                <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-xl">
                  Python
                </button>
                <button className="btn btn-outline outline-white outline-2 text-white hover:bg-white rounded-xl">
                  Python
                </button>
              </div>
            </section>
            <hr className="my-7 text-neutral-700" />
          </>
        )}

        <div className="mt-6 mb-2 flex items-center justify-between ">
          <h1 className="mb-3 bg-white text-md text-center text-black font-bold rounded-3xl px-3 py-1">
            Lessons
          </h1>
        </div>
        <div className="mb-6 flex flex-col gap-3">
          <Segment name="Introduction to IT" duration="1hr 30mins" lesson="Lesson 1" lessonDuration="30mins" overall="5" />
          <Segment name="CISSP" duration="1hr 30mins" lesson="Lesson 2" lessonDuration="30mins" overall="5" />
          <Segment name="Data Structures and Algorithms" duration="1hr 30mins" lesson="Lesson 3" lessonDuration="30mins" overall="5" />
        </div>
        <hr className="text-neutral-700" />
        <div className="mt-6 mb-2 flex items-center justify-between ">
          <h1 className="mb-3 bg-white text-md text-center text-black font-bold rounded-3xl px-3 py-1">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="collapse collapse-plus bg-card">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-medium border-b-2 border-neutral-600">Question 1</div>
            <div className="collapse-content">
              <p className="pt-3">hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-card">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-medium border-b-2 border-neutral-600">Question 2</div>
            <div className="collapse-content">
              <p className="pt-3">hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-card">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-medium border-b-2 border-neutral-600">Question 3</div>
            <div className="collapse-content">
              <p className="pt-3">hello</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default page;
