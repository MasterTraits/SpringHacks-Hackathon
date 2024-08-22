import { BsStarFill, BsThreeDotsVertical } from "react-icons/bs";

export default function CoursePref(
    {image, 
     name, 
     organization, 
     rating, 
     type, 
     topic, 
     description
    }) 

  {
  const descriptionSliced = description.slice(0, 100) + "See more..."

  return (
    <div id="" className="carousel-item flex-col relative w-full m-0 p-0">

      {/* IMAGE */}
      <div className="relative h-full">
        <img
          // USE IMAGE PROP HERE AFTER CONFIGURING
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="h-48 w-full object-cover object-center"
        />
        
        {/* TOPICS */}
        <div className="flex flex-wrap gap-2 absolute top-2 left-2 ">
          {/* WRAP AROUND IN MAP */}
          <button className="text-xs bg-card p-1 rounded-md">{topic}</button>
        </div>

        {/* FIX THIS STUFF BRO */}
        <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/3 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>


      {/* CONTEXT */}
      <div className="h-full w-full p-4 bg-card">
        <h3 className="mb-1 font-semibold text-md text-wrap leading-5">
          {name}
        </h3>
        <div className="mb-3 flex items-center w-full flex-wrap justify-between">
          <p className="text-sm">{organization}&nbsp;&nbsp;</p>
          <div className="flex">
            <BsStarFill />
            <p className="text-xs">&nbsp;{rating} - {type}</p>
          </div>
          
        </div>
        <p className="mb-4 text-sm text-neutral-400">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <button className="btn btn-accent">See more</button>
          <BsThreeDotsVertical />
        </div>
      </div>
      
    </div>
  );
}
