import React from 'react'
import Nav from './common/nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Idea from './pages/Idea'
import Footer from './common/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/idea' element={<Idea />} />
          <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
          </BrowserRouter>
    </div>
  )
}

export default App
