import Navbar from "@/components/navbar"
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function layout({children}) {
  return (
    <html lang="en">
    <body>
      {children}
      <Navbar />
      {/* <ToastContainer /> */}
    </body>
  </html>
  )
}
