import React from 'react'
import { IoMdSearch } from "react-icons/io";  
import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
   <header className='w-full bg-zinc-900 shadow-md flex items-center justify-between  px-[4vw] py-[1vw]'>
    <div className='text-white text-[2vw]  flex  font-[Tegar] '>
      <Link to="/" >
       <span>Book</span>
       <span className='text-blue-400'>Bliss</span>
       </Link>
    </div>

   
    <form className='flex  items-center  bg-white h-[5vh] w-[30%] rounded-full overflow-hidden  '>
      <input className='pl-[2vw] border-none w-full focus:outline-none h-[100%] rounded-l-full' type='text' placeholder='Search...' />
     <span className='flex px-[1vw] h-[100%]  bg-blue-400 justify-center text-[1.2vw] items-center'><IoMdSearch /></span>
    </form>
    

    <div className='text-white font-bold text-[1vw] flex gap-[2vw] '>
      <Link to="/" >
      <a>Home</a>
      </Link>
      <Link to="/about">
      <a>About</a>
      </Link>
      <Link to="/signup">
      <a>SignUp</a>
      </Link>
      
    </div>

   </header>
  )
}

export default Navbar
