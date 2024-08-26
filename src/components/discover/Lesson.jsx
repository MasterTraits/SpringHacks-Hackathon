import Link from 'next/link'
import { BsCameraVideo } from 'react-icons/bs'

export default function Lesson({lessonName, lessonDuration, overallLessons}) {
  return (
    <Link href="" className="flex items-center gap-2 px-4 py-2 w-full bg-navbar h-16 rounded-full hover:bg-card ">
      <BsCameraVideo className="text-4xl p-2 bg-card rounded-full"/>
      <div>
        <h3 className="font-bold text-md">{lessonName}</h3>
        <p className="text-neutral-600 text-sm">{lessonDuration}, {overallLessons}</p>
      </div>
    </Link>
  )
}
