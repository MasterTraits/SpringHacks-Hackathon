import Link from 'next/link' 
import { BsDoorOpen } from 'react-icons/bs';

export default function Certificate({name, organization, date, link}) {
  return (
    <cointainer className="h-full py-4 gap-3 flex ">
      <img src="" className="h-14 w-14 bg-white"/>
      <div className="*:text-sm">
        <h3 className="font-semibold leading-tight">
          Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential
        </h3>
        <h4 className="text-neutral-500">Organization is here</h4>
        <p className="mb-2 text-neutral-500">Got SAMPLE DATE HERE</p>
        <Link href={``} className="mt-1 py-0 px-1 btn flex gap-2 items-center max-w-44 rounded-lg">Check credential<BsDoorOpen/></Link>
      </div>
    </cointainer>
  )
}
