import { useState, useMemo } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Resume from './components/Resume'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFoundPage'
import Portfolio from './components/Portfolio'

export default function App() {



  // below is JSX, NOT html. 

  return (

    <>

      <BrowserRouter>
        <Header />



        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />

        </Routes>



        <Footer company="Footer Inc." />

      </BrowserRouter>

    </>

  )
}


