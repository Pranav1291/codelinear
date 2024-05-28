import React, { useState, useRef, useEffect } from 'react';


import image from '../assets/Frame 567.svg'
// import image2 from '../assets/Frame 461.svg';

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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Minified for production
import { Mousewheel } from "swiper/modules";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';







const Hero = () => {

    const ref = useRef(null);
    const refSecond = useRef(null);
    const refImage = useRef(null);
    const refList = useRef(null);
    const refHeading = useRef(null);


    const [isHovered, setisHovered] = useState(false);
    const [isSecondHovered, setisSecondHovered] = useState(false);
    const [isListHovered, setisListHovered] = useState(false);


    const handleHeadingMouseEnter = () => {
        gsap.to(refHeading.current, { duration: 0.5, opacity: 0.5, y: 0, color: "#FFFFFF", textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" });

    }

    const handleHeadingMouseLeave = () => {
        gsap.to(refHeading.current, { duration: 0.5, opacity: 0, y: 0, });
    }


    const handleThirdMouseEnter = () => {
        setisListHovered(true);
    }

    const handleThirdMouseLeave = () => {
        setisListHovered(false);
    }

    const handleSecondMouseEnter = () => {
        setisSecondHovered(true);
    }

    const handleSecondMouseLeave = () => {
        setisSecondHovered(false);
    }


    const handleMouseEnter = () => {
        setisHovered(true);
    }
    const handleMouseLeave = () => {
        setisHovered(false);

    }

    useEffect(() => {
        if (isHovered) {
            gsap.to(ref.current, {
                background: 'linear-gradient(45deg, #D4A381, #46200D)',
                color: 'white',
                duration: 0.5
            });
        } else {
            gsap.to(ref.current, {
                background: 'white',
                color: 'black',
                duration: 0.5
            });
        }
    }, [isHovered]);


    //for industries wala div

    useEffect(() => {
        if (isSecondHovered) {
            gsap.to(refSecond.current, {
                background: 'linear-gradient(45deg, #BCC66F, #517435)',
                color: 'white',
                duration: 0.7
            });
        } else {
            gsap.to(refSecond.current, {
                background: 'white',
                color: 'black',
                duration: 1
            });
        }
    }, [isSecondHovered]);


    useEffect(() => {
        if (isListHovered) {
            gsap.to(refImage.current, { opacity: 1, duration: 0.5 });
            gsap.to(refList.current, {
                backgroundColor: '#D3DAA7',
                color: 'white',
                duration: 0.5
            });
            gsap.to(refList.current.querySelectorAll('li'), {
                fontSize: '1.5rem',
                duration: 0.3,
                stagger: 0.1
            });
        } else {
            gsap.to(refImage.current, { opacity: 1, duration: 0.5 });
            gsap.to(refList.current, {
                backgroundColor: 'white',
                color: 'black',
                duration: 0.3
            });
            gsap.to(refList.current.querySelectorAll('li'), {
                fontSize: '1rem',
                duration: 0.3,
                stagger: 0.1
            });
        }
    }, [isListHovered]);







    {/* // const HoverEffectExample = () => { */ }
    {/* //     const containerRef = useRef(null);
    //       const onMouseEnter = () => { */}

    {/* //         gsap.to(containerRef.current, {
    //           backgroundColor: 'blue', // Change background color to blue on hover
    //           color: 'white', // Change text color to white on hover 
    //           duration: 0.3
    //         });
    //       };
         */}

    {/* //       const onMouseLeave = () => {
    //         gsap.to(containerRef.current, {
    //           backgroundColor: 'transparent', // Restore original background color when hover ends
    //           color: 'black', // Restore original text color when hover ends 
    //           duration: 0.3
    //         });
    //       };
      
    //       containerRef.addEventListener('mouseenter', onMouseEnter);
    //       containerRef.addEventListener('mouseleave', onMouseLeave); */}





    return (

        <div className='main-container ' >








            <div>
                <h1 className='text-8xl mt-40 mb-60 px-6 '>PROPELLING THE <br />
                    WORLD, BY DESIGN.
                </h1>


            </div>



            <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='second-div py-10' >

                <h1 className='AMET text-8xl mt-80 py-6 px-6'>AMET MAGNIS DIAM <br />VARIUS VIVERRAAT</h1>
                <p className='text-ms flex justify-end ml-auto mr-20 mt-5'>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br />Voluptatum, sit. Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Obcaecati, debitis?</p>
                <img className='flex justify-end ml-auto mt-20 mr-20 ' src={image3} alt="image3" />

                <img className='px-6' src={image} alt="image" />

            </div>
            <div className='flex items-center ml-5 py-20 mt-20'>
                <h1 className='text-8xl '>SERVICES</h1>
                <p className='font-semibold text-s ml-[12rem] flex justify-end'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Facere laboriosam soluta<br /> asperiores magnam neque quo sint dolores</p>
            </div>


            <Swiper

                direction="horizontal"
                spaceBetween={50}
                slidesPerView={0.8}

                dragable={true}
                modules={[Mousewheel]}
            >


                <div className='border-t border-gray-800 py-20 flex space-x-10 '>
                    {/* overflow-x-auto whitespace-nowrap flex space-x-4 */}



                    <SwiperSlide>
                        <div className='flex gap-[-50px]'>
                            <h1 className='ml-[30px] text-[150px]'>CONSULTING AND<br/> STRATEGY</h1>
                            <ul className='leading-loose'>
                                <li className=''>MARKET RESEARCH</li>

                                <li>STAKEHOLDER WORKSHOPS</li>
                                <li>PRODUCT STRATEGY AND ROADMAPPING</li>
                                <li>TECHNOLOGY CONSULTING AND PLATFORM PLANNING</li>
                                <li>GTM STRATEGY</li>
                            </ul>
                        </div>

                    </SwiperSlide>




                    <SwiperSlide>
                        <div className='flex'>
                            <h1 className='text-[180px]'>USER<br />EXPERIENCE</h1>
                            <ul className='leading-loose'>
                                <li>UX AUDIT</li>
                                <li>UX RESEARCH</li>
                                <li>UI UX CONSULTING</li>
                                <li>USER EXPERIENCE DESIGN</li>
                                <li>DIGITAL BRANDING</li>
                            </ul>

                        </div>

                    </SwiperSlide>



                    <SwiperSlide>
                    <div className='flex'>
                        <h1 className='ml-[30px] text-[180px]'>PRODUCT<br /> DEVELOPMENT</h1>

                        <ul className='leading-loose'>
                            <li className=''>WEBSITE DEVELOPMENT</li>

                            <li>WEB APP DEVELOPMENT</li>
                            <li>E-COMMERCE DEVELOPMENT</li>
                            <li>MVP DEVELOPMENT</li>
                            <li>NATIVE APP DEVELOPMENT</li>
                            <li>HYBRID APP DEVELOPMENT</li>
                        </ul>
                    </div>

                    </SwiperSlide>
                    



                   <SwiperSlide>
                   <div className='flex'>
                        <h1 className='text-[180px]'>DIGITAL<br />MARKETING</h1>
                        <ul className='leading-loose'>
                            <li>SEO</li>
                            <li>SOCIAL MEDIA</li>
                            <li>PAID SEARCH</li>
                            <li>PAID SOCIAL</li>

                        </ul>

                    </div>

                   </SwiperSlide>
                   






                </div>
                </Swiper>







                <div className='border-t border-gray-700 flex items-center ml-5 py-20 mt-20'>
                    <h1 className='text-8xl '>PORTFOLIO</h1>
                    <p className='font-semibold text-s px-40 flex justify-end ml-auto'>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Facere laboriosam soluta</p>
                </div>

                <Swiper

                direction="horizontal"
                spaceBetween={50}
                slidesPerView={2}

                dragable={true}
                modules={[Mousewheel]}
            >
                 
                 <div className='flex '>

                 <SwiperSlide>
                    <img src={image4} alt="image4" />
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={image5} alt="image5" />

                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={cloth} alt="cloth" />

                        
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={bull} alt="bull" />


                    </SwiperSlide>



                    <SwiperSlide>
                    <img src={phone} alt="phone" />


                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={table} alt="table" />


                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={socks} alt="socks" />


                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={girl} alt="girl" />


                    </SwiperSlide>



                </div>

                 
               
                </Swiper>
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
                <div ref={refSecond} onMouseEnter={handleSecondMouseEnter} onMouseLeave={handleSecondMouseLeave} className=''>
                    <div className='py-[20rem]'>
                        <h1 className='text-8xl ml-5 h-2'>INDUSTRIES<br />WE SERVED</h1></div>
                    <div> <p className='font-semibold mt-[-20px] mb-[100px] py-5 text-s px-40 flex justify-end '>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Facere laboriosam soluta</p></div>




                    {/* <div className='w-1/2 '><img src={service} alt="serviceIcon" /></div> */}




                    <div ref={refImage} onMouseEnter={handleThirdMouseEnter} onMouseLeave={handleThirdMouseLeave} className='flex '>
                        <div className='w-1/2'> <img src={glass} alt="glass" /></div>
                        <div ref={refList}> <ul className='py-5 justify-end ml-auto px-20 text-[21px] space-y-20'>
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
                </div>

                <div className='border-t border-gray-700 flex items-center '></div>
                <div className='text-2xl w-screen-full text-semibold flex justify-center mt-5 h-[4rem]'>
                    <h4 className=''>Wanna Know a Secret ?</h4><br />

                </div>
                <div ref={refHeading} onMouseEnter={handleHeadingMouseEnter} onMouseLeave={handleHeadingMouseLeave} className='text-[13rem] flex justify-center mt-[50px]'>
                    <h1 className=''>LETS TALK .</h1>
                </div>




        </div>


    )
}

export default Hero
