import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SermonsPage from './pages/SermonsPage'
import MinistriesPage from './pages/MinistriesPage'
import ConnectPage from './pages/ConnectPage'
import ScrollToHash from './components/ScrollToHash'
import VisitPage from './pages/VisitPage';


export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <ScrollToHash />
      <Header />
      <main className="pb-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}