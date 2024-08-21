import Link from 'next/link'

export default function ArticleHeader({text, referral}) {
  return (
    <header className="mb-2 mx-7 flex justify-between items-center">
      <h2 className="text-xl font-semibold">{text}</h2>
      <Link href={referral} 
        className={`btn rounded-full py-1 px-4 m-0 bg-card`}
      >
        more..
      </Link>
    </header>
  )
}
