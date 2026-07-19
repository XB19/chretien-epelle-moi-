import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import RevealAnimations from './RevealAnimations.jsx'

export default function ClientLayout() {
  return (
    <>
      <RevealAnimations />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
