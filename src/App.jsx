import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/profile" element={<Profile/>}/>
   <Route path="/login" element={<LogIn/>}/>
   <Route path="/signup" element={<SignUp/>}/>
   <Route path="/about" element={<About/>}/>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App
