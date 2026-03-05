import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
     <Footer />

    </div>
  )
}

export default App