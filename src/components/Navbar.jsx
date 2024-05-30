import React from 'react'
import logo from '../assets/logo.svg';
import logo2 from '../assets/Frame 11.svg';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
//import HamburgerIcon from './Hamburger';

const Navbar = () => {

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".menu", { duration: 0.7, x: 0, opacity: 1, display: 'block' });
    } else {
      gsap.to(".menu", { duration: 0.7, x: 300, opacity: 0, display: 'none' });
    }
  }, [menuOpen]);


  
  // useEffect(() => {
  //   const svgElement = svgRef.current;
  //   const line1Element = line1Ref.current;
  //   const line2Element = line2Ref.current;

  //   const handleClick = () => {
  //     gsap.to([line1Element, line2Element], {
  //       y: 30, // line fall krega axis pe
  //       duration: 0.5,
  //       ease: 'power1.inOut'
  //     });
  //   };

  //   svgElement.addEventListener('click', handleClick);

  //   // Clear evten listner
  //   return () => {
  //     svgElement.removeEventListener('click', handleClick);
  //   };
  // }, []);




  return (
    <div className='sticky top-0 mt-[-0.8px] ml-[-0.64px]'>
      <img className='ml-5 w-32 ' src={logo} alt="Nothing" />

      <button className='hamburger h-[50px] flex justify-end ml-auto mr-20 mt-[-40px]' onClick={() => setMenuOpen(!menuOpen)}>
      
      <img  src={logo2} alt="logo2" />
      </button>

      


      



      <div className='menu flex  ml-auto '>

      
      <ul className='flex text-xs justify-end gap-5 mr-40 mt-[-30px] ml-auto'>
          <li>about Us</li>
          <li>services</li>
          <li>work</li>
          <li>Let's Talk</li>
      </ul>

      </div>
      


      </div>

      
    

  )
}

export default Navbar
