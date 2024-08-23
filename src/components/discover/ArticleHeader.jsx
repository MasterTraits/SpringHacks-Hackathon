import Link from 'next/link'

export default function ArticleHeader({text, referral}) {
  return (
    <header className="mb-3 mx-7 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">{text}</h2>
      <Link 
        href={referral} 
        className={`p-2 rounded-full text-sm m-0 bg-card hover:bg-neutral-800`}
      >
        more..
      </Link>
    </header>
  )
}
