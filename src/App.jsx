import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import ClientLayout from './components/ClientLayout.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Gallery from './pages/Gallery.jsx'
import GalleryEdition from './pages/GalleryEdition.jsx'
import Testimonial from './pages/Testimonial.jsx'
import Team from './pages/Team.jsx'
import Partner from './pages/Partner.jsx'
import Contact from './pages/Contact.jsx'
import Donation from './pages/Donation.jsx'

import AdminLogin from './admin/Login.jsx'
import AdminLayout from './admin/AdminLayout.jsx'
import Dashboard from './admin/Dashboard.jsx'
import AdminContacts from './admin/Contacts.jsx'
import AdminPartners from './admin/Partners.jsx'
import ContactDetail from './admin/ContactDetail.jsx'
import PartnerDetail from './admin/PartnerDetail.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* SITE CLIENT */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/histoire" element={<History />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/galerie/:edition" element={<GalleryEdition />} />
          <Route path="/temoignage" element={<Testimonial />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/partenaire" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faire-un-don" element={<Donation />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin-panel" element={<Dashboard />} />
          <Route path="/admin-panel/contacts" element={<AdminContacts />} />
          <Route path="/admin-panel/partners" element={<AdminPartners />} />
          <Route path="/admin-panel/contacts/:id" element={<ContactDetail />} />
          <Route path="/admin-panel/partners/:id" element={<PartnerDetail />} />
        </Route>

      </Routes>
    </>
  )
}
