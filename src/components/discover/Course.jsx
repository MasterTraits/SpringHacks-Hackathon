import { BsStarFill } from "react-icons/bs"
import Link from "next/link"

export default function Course({name, organization, rating, type}) {
  const nameSliced = name.slice(0, 30) + "..."

  // Add rating equation here

  return (
    <Link 
      href='/discover/catalog/1' 
      className="ml-5 bg-card border-[1px] border-neutral-700 rounded-xl"
    >
      {/* ADD IMAGE MAP */}
      <img src="" className="mb-2 h-28 w-52 rounded-t-xl" /> 
      <div className="px-3 pt-2">
        <h3 className="mb-1 font-semibold text-md text-wrap w-36 leading-5">{nameSliced}</h3>
        <p className="text-sm">{organization}</p>
        <div className="flex items-center w-full">
          <BsStarFill/><p className="text-xs">&nbsp;{rating} - {type}</p>
        </div>
      </div>
    </Link>
  )
}
