import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const LogoZoom = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const text = textRef.current;

    // GSAP animation
    gsap.timeline({ repeat: -1 }) // Repeat infinitely
      .to(logo, { scale: 1.5, duration: 0.5, delay:3, x:-60 , ease: "none" })
      .to(text, { opacity: 1, duration: 0.1 }, "-=0.2") // Show text when zoomed in
      .to(logo, { scale: 1, duration: 0.5, delay: 3, x:0, ease: "none" })
      .to(text, { opacity: -2, duration: 0.1, x:30 }, "-=0.2"); // Hide text when zoomed out

  }, []);

  return (
    <div className='overflow-hidden flex  ml-5' style={{ display: 'flex', flexDirection: 'column' }}>
      <div ref={logoRef}  className='w-[110px] h-[50.71px]' style={{ background: 'url(/src/assets/Vector.png) no-repeat ' }}>
      <p className='w-[100px] h-[80px] py-[17.5px] overflow-hidden ml-[105px] font-semibold' ref={textRef} style={{ opacity: 0, marginTop: '10px', transition: 'opacity 0.2s' }}>to impact</p>
      </div>
      {/* <div className='' ref={textRef} style={{ opacity: 0, marginTop: '10px', transition: 'opacity 0.1s' }}>
        to impact
      </div> */}
    </div>
    
  );
};

export default LogoZoom;
