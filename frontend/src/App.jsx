import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <BrowserRouter>
    <div className='text-white w-full h-[100vh] bg-zinc-950'>
  <Navbar/>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/profile" element={<Profile/>}/>
   <Route path="/login" element={<LogIn/>}/>
   <Route path="/signup" element={<SignUp/>}/>
   <Route path="/about" element={<About/>}/>


    </Routes>
    
    </div>
    </BrowserRouter>
  )
}

export default App
