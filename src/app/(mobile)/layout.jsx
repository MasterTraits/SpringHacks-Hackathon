import Navbar from "@/components/navbar"

export default function layout({children}) {
  return (
    <html lang="en">
    <body>
      {children}
      <Navbar />
    </body>
  </html>
  )
}
