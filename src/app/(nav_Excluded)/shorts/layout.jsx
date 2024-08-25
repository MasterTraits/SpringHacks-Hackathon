
import ShortsNavbar from '@/components/shorts/shortsnavbar'

export default function layout({children}) {
  return (
    <div>
      {children}
      <ShortsNavbar />
    </div>
  )
}
