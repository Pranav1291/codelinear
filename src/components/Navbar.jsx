import React from 'react'
import logo from '../assets/logo.svg';
import logo2 from '../assets/Frame 11.svg';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
//import HamburgerIcon from './Hamburger';
// import '../index.css';
//import 'antd/dist/antd.min.css';

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
      tl.to(line1Ref.current, { rotation: 0, opacity: 1, transformOrigin: "50% 50%", duration: 0.7, x: 0, y: 0 })
        .to(line2Ref.current, { rotation: 0, transformOrigin: "50% 50%", duration: 0.7, x: 0, y: 0 }, 0);
    } else {
      // Animate
      const tl = gsap.timeline();
      tl.to(line1Ref.current, { rotation: 90, transformOrigin: "50% 50%", duration: 0.7, x: 22, y: 10 })
        .to(line1Ref.current, { opacity: 0, duration: 1 }, "<") // "<" ensures the fade starts at the same time as the rotation
        .to(line2Ref.current, { rotation: 90, transformOrigin: "50% 50%", duration: 0.7, x: 22, y: 10  }, 0);
    }
    setIsAnimated(!isAnimated);
  };





  return (
    

    <section className='nav-container sticky top-0'>
  <div className='h-[65.97px]    '>

    <img className='ml-[55px] w-[99.36px] h-[45.71px]  max-sm:w-[60px] max-md:ml-5 max-md:w-[90px] max-lg:w-[99px] xl:ml-[55px] xl:h-[45.71px] max-xl:ml-[55px] max-xl:w-[99.36px] max-2xl:w-[200px]' src={logo} alt="Nothing" />

    <button className='hamburger h-[50px] flex justify-end ml-auto mr-[100px] mt-[-40px] mb-[2px] ' onClick={() => setMenuOpen(!menuOpen)}>
      <div className='' onClick={handleClick}>
        <svg className='max-md:w-[2.5rem] xl:mr-[26.95px] max-lg:w-[70px] max-sm:ml-[250px] max-sm:h-[25px]' id="svg" width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: "difference" }}>
            <line ref={line1Ref} x1="0.162234" y1="37.3264" x2="47.3588" y2="37.3266" stroke="black" strokeWidth="1.49342"/>
            <line ref={line2Ref} x1="0.162234" y1="22.3186" x2="47.3588" y2="22.3188" stroke="black" strokeWidth="1.79342"/>
          </g>
        </svg>
      </div>
    </button>

    <div className='menuhamburger flex ml-auto'>
      <ul className='menu-1 max-sm:gap-2 max-sm:text-[8px] flex text-xs justify-end gap-5 mr-10 md:mr-40 mt-[-30px] ml-auto'>
        <li>about Us</li>
        <li>services</li>
        <li>work</li>
        <li>Let's Talk</li>
      </ul>
    </div>

  </div>
</section>


      
    

  )
}

export default Navbar
