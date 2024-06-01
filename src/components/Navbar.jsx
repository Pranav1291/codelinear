import React from 'react'
import logo from '../assets/logo.svg';
import logo2 from '../assets/Frame 11.svg';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
//import HamburgerIcon from './Hamburger';
// import '../index.css';

const Navbar = () => {
  //const hamburgerRef = useRef(null);

  
  const [menuOpen, setMenuOpen] = useState(false);
  //const [line, setline] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".menuhamburger", { duration: 0.7, x: 0, opacity: 1, display: 'block' });
    } else {
      gsap.to(".menuhamburger", { duration: 0.7, x: 300, opacity: 0, display: 'none' });
    }
  }, [menuOpen]);

  
  
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);



  const handleClick = () => {
    if (isAnimated) {
      // Reset to original state
      const tl = gsap.timeline();
      tl.to(line1Ref.current, { rotation: 0, opacity: 1, transformOrigin: "50% 50%", duration: 0.7 })
        .to(line2Ref.current, { rotation: 0, transformOrigin: "50% 50%", duration: 0.7 }, 0);
    } else {
      // Animate
      const tl = gsap.timeline();
      tl.to(line1Ref.current, { rotation: 90, transformOrigin: "50% 50%", duration: 0.7 })
        .to(line1Ref.current, { opacity: 0, duration: 1 }, "<") // "<" ensures the fade starts at the same time as the rotation
        .to(line2Ref.current, { rotation: 90, transformOrigin: "50% 50%", duration: 0.7 }, 0);
    }
    setIsAnimated(!isAnimated);
  };





  return (
    <div className='h-[65.97px] sticky top-0 justify-between mt-[-0.8px] ml-[-0.64px]'>
      
      <img className='ml-5 w-32 ' src={logo} alt="Nothing" />

      <button className='hamburger h-[50px] flex justify-end ml-auto mr-20 mt-[-40px]' onClick={() => setMenuOpen(!menuOpen)}>
      
      {/* <img  src={logo2} alt="logo2" /> */}
      
      <div onClick={handleClick}>
      <svg id="svg" width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style={{ mixBlendMode: "difference" }}>
          <line ref={line1Ref} x1="0.162234" y1="37.3264" x2="47.3588" y2="37.3266" stroke="black" strokeWidth="1.49342"/>
          <line ref={line2Ref} x1="0.162234" y1="22.3186" x2="47.3588" y2="22.3188" stroke="black" strokeWidth="1.79342"/>
        </g>
      </svg>
    </div>
    </button>

      


      



      <div className='menuhamburger flex  ml-auto '>

      
      <ul className='menu-1 flex text-xs justify-end gap-5 mr-40 mt-[-30px] ml-auto'>
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
