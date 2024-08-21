import { BsStarFill } from "react-icons/bs"

export default function Course({name, organization, rating, type}) {
  const nameSliced = name.slice(0, 30) + "..."
  

  return (
    <div className="ml-4">
      <img src="" className="mb-2 h-24 w-36 border-[1px] border-white rounded-lg" /> 
      <h3 className="font-semibold text-md text-wrap w-36 leading-5">{nameSliced}</h3>
      <p className="text-sm">{organization}</p>
      <div className="flex items-center w-full">
        <BsStarFill/><p className="text-xs">&nbsp;4.5 - {type}</p>
      </div>
  </div>
  )
}
