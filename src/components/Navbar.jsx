import React from 'react'
import logo from '../assets/logo.svg';
import logo2 from '../assets/Frame 11.svg'

const Navbar = () => {
  return (
    <div className='sticky top-0'>
      <img className='ml-5 w-32' src={logo} alt="Nothing" />
      
      <img className='flex justify-end ml-auto mr-20 mb-30 ' src={logo2} alt="logo2" />


      </div>
    

  )
}

export default Navbar
