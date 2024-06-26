import React, { useEffect, useRef } from 'react';
import footerLogo from '../assets/Frame 513.svg';
import Rights from '../assets/© Codelinear 2023. All Rights Reserved..png';
import footer from '../assets/Frame 218.svg';
import gsap from 'gsap';

const Footer = () => {

    const logoRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;
        const text = textRef.current;

        // GSAP animation
        gsap.timeline({ repeat: -1 }) // Repeat infinitely
            .to(logo, { scale: 1.5, duration: 0.5, delay: 3, x: -60, ease: "none" })
            .to(text, { opacity: 1, duration: 0.1, x:-1 }, "-=0.2") // Show text when zoomed in
            .to(logo, { scale: 1, duration: 0.5, delay: 3, x: 0, ease: "none" })
            .to(text, { opacity: -2, duration: 0.1, x:0 }, "-=0.2"); // Hide text when zoomed out

    }, []);

    return (
        <section className='text-center '>
            <div className='' >
                <div className='h-[120.25px] ml-5  '>

                    <div className='overflow-hidden   ml-5' style={{ display: 'flex', flexDirection: 'column' }}>
                        <div ref={logoRef} className='w-[100px] h-[60.71px]  bg-footer-logo bg-no-repeat' >
                            <p className='w-[105px] h-[80px] tracking-tighter mt-[24.5px]  text-black text-[20px] font-extra-medium overflow-hidden ml-[99px] ' ref={textRef} style={{ opacity: 0,  transition: 'opacity 0.1s' }}>to impact</p>
                        </div>
                        {/* <div className='' ref={textRef} style={{ opacity: 0, marginTop: '10px', transition: 'opacity 0.1s' }}>
        to impact
      </div> */}
                    </div>

                    <div className='mt-[30px] '><img className=' w-[237px] h-[15px] max-md:ml-[20px] max-sm:h-[12px] max-sm:mb-[0px] sm:mt-[10px] max-sm:mt-[20px] max-sm:w-[150px] max-sm:ml-[60px] ' src={Rights} alt="rightsfooter" /></div>

                    <div className='flex justify-end mr-10 mt-[-70px] max-sm:mt-[-40px] max-md:py-[1px] max-md:mt-[40px]'><img src={footer} alt="footer" /></div>

                </div>
            </div>


        </section>

    )
}

export default Footer
