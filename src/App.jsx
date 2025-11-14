import React from 'react'
import Nav from './components/nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Idea from './pages/Idea'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/idea' element={<Idea />} />
          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
