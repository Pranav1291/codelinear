import React from 'react'
import Navbar from './Navbar';
import image from '../assets/Frame 567.svg'
import image2 from '../assets/Frame 461.svg';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import image3 from '../assets/Component 41 (1).svg';
import image4 from '../assets/pexels-anh-khac-6318739 1.png';
import image5 from '../assets/pexels-deva-darshan-1173777 1.png';
import image6 from '../assets/Frame 20.png';
import cloth from '../assets/iStock-182864957 2.png';
import bull from '../assets/iStock-1223076208 1.png';
import phone from '../assets/Frame 1000001741.png';
import table from '../assets/Frame 1000001741 (1).png';
import socks from '../assets/Frame 1000001741 (2).png';
import girl from '../assets/Frame 1000001741 (3).png';
import glass from '../assets/glass (1).png';
import service from '../assets/glass (2).png';




const Hero = () => {

    const HoverEffectExample = () => {
        const containerRef = useRef(null);
          const onMouseEnter = () => {

            gsap.to(containerRef.current, {
              backgroundColor: 'blue', // Change background color to blue on hover
              color: 'white', // Change text color to white on hover 
              duration: 0.3
            });
          };
        
      
          const onMouseLeave = () => {
            gsap.to(containerRef.current, {
              backgroundColor: 'transparent', // Restore original background color when hover ends
              color: 'black', // Restore original text color when hover ends 
              duration: 0.3
            });
          };
      
          containerRef.addEventListener('mouseenter', onMouseEnter);
          containerRef.addEventListener('mouseleave', onMouseLeave);
    
    

    

    return (
        <div className='main-container ' >

            <div>
                <h1 className='text-8xl mt-40 mb-60 px-6 '>PROPELLING THE <br />
                    WORLD, BY DESIGN.
                </h1>
                
            </div>

            <div ref={containerRef} className='second-div py-10 bg-gradient-to-br from-white to-white transition-all duration-500 hover:from-yellow-650 hover:to-yellow-700 hover:text-white' >

                <h1 className='text-8xl mt-80 py-6 px-6'>AMET MAGNIS DIAM <br />VARIUS VIVERRAAT</h1>
                <p className='text-ms flex justify-end ml-auto mr-20 mt-5'>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br />Voluptatum, sit. Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Obcaecati, debitis?</p>
                <img className='flex justify-end ml-auto mt-20 mr-20 ' src={image3} alt="image3" />

                <img className='px-6' src={image} alt="image" />

            </div>
            <div className='flex items-center ml-5 py-20 mt-20'>
                <h1 className='text-8xl '>SERVICES</h1> 
                <p className='font-semibold text-s px-80 flex justify-end'>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Facere laboriosam soluta<br/> asperiores magnam neque quo sint dolores</p>
            </div>
            

            <div className='border-t border-gray-800 py-20 overflow-x-auto whitespace-nowrap flex space-x-4'>
                <h1 className='ml-[30px] text-[180px]'>CONSULTING <br/>AND STRATEGY</h1>
                <ul className='leading-loose'>
                    <li className=''>MARKET RESEARCH</li>

                    <li>STAKEHOLDER WORKSHOPS</li>
                    <li>PRODUCT STRATEGY AND ROADMAPPING</li>
                    <li>TECHNOLOGY CONSULTING AND PLATFORM PLANNING</li>
                    <li>GTM STRATEGY</li>
                </ul>
                <h1 className='text-[180px]'>USER<br/>EXPERIENCE</h1>
                <ul className='leading-loose'>
                    <li>UX AUDIT</li>
                    <li>UX RESEARCH</li>
                    <li>UI UX CONSULTING</li>
                    <li>USER EXPERIENCE DESIGN</li>
                    <li>DIGITAL BRANDING</li>
                </ul>
                <h1 className='ml-[30px] text-[180px]'>PRODUCT<br/> DEVELOPMENT</h1>

                <ul className='leading-loose'>
                    <li className=''>WEBSITE DEVELOPMENT</li>

                    <li>WEB APP DEVELOPMENT</li>
                    <li>E-COMMERCE DEVELOPMENT</li>
                    <li>MVP DEVELOPMENT</li>
                    <li>NATIVE APP DEVELOPMENT</li>
                    <li>HYBRID APP DEVELOPMENT</li>
                </ul>
                <h1 className='text-[180px]'>DIGITAL<br/>MARKETING</h1>
                <ul className='leading-loose'>
                    <li>SEO</li>
                    <li>SOCIAL MEDIA</li>
                    <li>PAID SEARCH</li>
                    <li>PAID SOCIAL</li>
                    
                </ul>
                
            </div>
            <div className='border-t border-gray-700 flex items-center ml-5 py-20 mt-20'>
                <h1 className='text-8xl '>PORTFOLIO</h1> 
                <p className='font-semibold text-s px-40 flex justify-end ml-auto'>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Facere laboriosam soluta</p>
            </div>
            <div className='flex gap-2 overflow-auto'>
                <img src={image4} alt="image4" />
                
                <img src={image5} alt="image5" />
                <img src={cloth} alt="cloth" />
                <img src={bull} alt="bull" />
                <img src={phone} alt="phone" />
                <img src={table} alt="table" />
                <img src={socks} alt="socks" />
                <img src={girl} alt="girl" />

                
                
            </div>
            <div className='flex justify-evenly font-semibold py-2'>
                    <h3>MANGO</h3>
                    <h3>COWBOY</h3>
                    <h3>TRADEJINI</h3>
                    <h3>KLUBB</h3>
                    <h3>IKEA</h3>
                    <h3>WILLIAM ABRAHAM</h3>
                    <h3>VUORI</h3>
                </div>

                <div>
                    <img src={image6} alt="image6" />
                </div>

                <div className='py-[20rem]'>
                    <h1 className='text-8xl ml-5'>INDUSTRIES<br/>WE SERVED</h1>
                    <p className='font-semibold text-s px-40 flex justify-end '>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Facere laboriosam soluta</p>
                    
                    <img src={glass} alt="glass" />
                    <img src={service} alt="serviceIcon" />
                    <ul className=''>
                    <li>FINTECH</li>
                    <li>TECHNOLOGY</li>
                    <li>E-COMMERCE</li>
                    <li>SUPPLY CHAIN AND LOGISTICS</li>
                    <li>HEALTHCARE</li>
                    <li>FOOD AND BEVERAGES</li>
                    <li>BIOPHARMACEUTICAL</li>
                    <li>MANUFACTURING</li>
                </ul>
                </div>
                
                </div>
        
        
    )
}
}
export default Hero
