"use client";
import React, { useState, useEffect } from 'react'
import { CiHome } from "react-icons/ci";
import { AiOutlineCode } from "react-icons/ai";

const Navbar = ({ setPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'} flex flex-wrap gap-5 items-center justify-center py-10`}>
      <div>
        <span className='archivo-black-regular text-white cursor-default'>The Spyke</span>
      </div>
      <div className='flex gap-5'>
        <button
          className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
          onClick={() => setPage('home')}
        >
          <CiHome />
          Home
        </button>
        <button
          className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
          onClick={() => setPage('projects')}
        >
          <AiOutlineCode />
          Projects
        </button>
      </div>
    </nav>
  )
}

export default Navbar