import { BsStarFill } from "react-icons/bs"
import Link from "next/link"

export default function ShortCourse({name, organization, rating, type}) {
  const nameSliced = name.slice(0, 22) + "..."

  // Add rating equation here

  return (
    <Link href='' className="mb-5">
      {/* ADD IMAGE MAP */}
      <img src="" className="mb-2 h-28 w-32 rounded-xl border-white border-2" /> 
        <h3 className="font-semibold text-md text-wrap w-40 leading-5">{nameSliced}</h3>
        <p className="text-sm">{organization}</p>
        <div className="flex items-center w-full">
          <BsStarFill/><p className="text-xs">&nbsp;{rating} - {type}</p>
        </div>
    </Link>
  )
}
