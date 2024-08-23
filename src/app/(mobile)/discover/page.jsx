import { BsBell, BsSearch, BsStarFill } from "react-icons/bs"
import ArticleHeader from "@/components/discover/ArticleHeader"
import Course from "@/components/discover/Course"
import CoursePref from "@/components/discover/CoursePref"

export default function page() {
  return (
    <main className='h-full mb-16 bg-background overflow-hidden'>
      
      {/* INTRODUCTORY */}
      <section className='relative mb-6 p-7 w-full'>
        <img 
          className='top-0 left-0 absolute z-0 w-full h-full object-cover filter brightness-50'
          src='https://cdn.library.vanderbilt.edu/wp-content/uploads/2023/08/heard-home-02.jpg'
        />
        <div className="z-10">
          <h1 className='flex justify-start mb-7 text-4xl font-semibold leading-tight'>
            Advance<br/> Your Career
          </h1>
          <h1 className='absolute top-7 mb-7 text-4xl font-bold leading-tight'>
            Advance<br/> Your Career
          </h1>
        </div>
        
        {/* FIX IMAGE, IMAGE IS ABOVE H1 */}

        <form className='flex justify-center gap-2 z-10'>
          <input 
            type="search" 
            placeholder="Search here" 
            className='input text-sm bg-neutral-50 w-full text-black rounded-full z-10'
            />
          <button type="submit" className='btn rounded-full z-10'>
            <BsSearch className="text-xl"/>
          </button>
        </form>
      </section>

      {/* TOPICS PART */}
      <article className="mb-7">
          <ArticleHeader text="Topics" referral=""/>
          <div className="overflow-hidden h-12">
            <div className="flex h-32 overflow-y-auto whitespace-nowrap">
            {/* { Fetch data here using .map() } */}
              <button className="btn btn-outline ml-4 rounded-full outline-white text-white">Generative AI</button>
            </div>
          </div>
        </article>

        {/* MY COURSES */}
        <article className="mb-7">
          <ArticleHeader text="My Courses" referral=""/>
            <div className="overflow-hidden h-48">
              <div className="flex h-52 overflow-y-auto whitespace-nowrap">
              {/* { Fetch data here using .map() } */}
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
        <ArticleHeader text="Based on Your Preferences" referral=""/>
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
        <ArticleHeader text="Most Popular" referral=""/>
          <div className="overflow-hidden h-48">
            <div className="flex h-52 overflow-y-auto whitespace-nowrap">
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
  )
}
