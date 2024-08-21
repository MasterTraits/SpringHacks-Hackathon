import { BsBell, BsStarFill } from "react-icons/bs"
import ArticleHeader from "@/components/discover/ArticleHeader"
import Course from "@/components/discover/Course"

export default function page() {
  return (
    <main className='h-full mb-[5.5rem] bg-neutral-800 overflow-hidden'>
      
      {/* INTRODUCTORY */}
      <section className='relative mb-4 p-7 w-full bg-neutral-500'>
        <h1 className='flex justify-start mb-7 text-4xl font-semibold leading-tight z-20'>
          Advance<br/> Your Career
        </h1>
        {/* FIX IMAGE, IMAGE IS ABOVE H1 */}
        {/* <img 
          className='top-0 left-0 absolute z-0 w-full h-full object-cover'
          src='https://cdn.library.vanderbilt.edu/wp-content/uploads/2023/08/heard-home-02.jpg'
        /> */}
        <div className='flex justify-center gap-2 z-10'>
          <input 
            type="search" 
            placeholder="Search here" 
            className='input bg-neutral-50 w-full text-black rounded-full z-10'
            />
          <button className='btn rounded-full z-10'>Search</button>
        </div>
      </section>

      {/* TOPICS PART */}
      <article className="mb-6">
        <ArticleHeader text="Topics" referral=""/>
        <div className="overflow-hidden h-12">
          <div className="flex h-32 overflow-y-auto whitespace-nowrap">
           {/* { Fetch data here using .map() } */}
            <button className="btn btn-outline ml-4 rounded-full outline-white text-white">Generative AI</button>
          </div>
        </div>
      </article>

      {/* MY COURSES */}
      <article className="mb-6">
        <ArticleHeader text="My Courses" referral=""/>
          <div className="overflow-hidden h-48">
            <div className="flex h-52 overflow-y-auto whitespace-nowrap">
            {/* { Fetch data here using .map() } */}
              <Course 
                name="Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential"
                organization="Coursera"
                type="With Certificate"
              />
              <Course 
                name="Programming and Depression"
                organization="Coursera"
                type="With Certificate"
              />
              <Course 
                name="Programming"
                organization="Coursera"
                type="With Certificate"
              />
            </div>
          </div>
      </article>

      {/* BASED ON YOUR PREFERENCES */}
      <article className="mb-6">
        <ArticleHeader text="My Courses" referral=""/>
          <div className="overflow-hidden h-48">
            <div className="flex h-52 overflow-y-auto whitespace-nowrap">
            {/* { Fetch data here using .map() } */}
              <Course 
                name="Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential"
                organization="Coursera"
                type="With Certificate"
              />
              <Course 
                name="Programming and Depression"
                organization="Coursera"
                type="With Certificate"
              />
              <Course 
                name="Programming"
                organization="Coursera"
                type="With Certificate"
              />
            </div>
          </div>
      </article>      

    </main>
  )
}
