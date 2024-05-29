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
import footerLogo from '../assets/Frame 513.svg';
import Rights from '../assets/© Codelinear 2023. All Rights Reserved..png';
import footer from '../assets/Frame 218.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';







const Hero = () => {

    const ref = useRef(null);
    const refSecond = useRef(null);
    const refImage = useRef(null);
    const refList = useRef(null);
    const refHeading = useRef(null);
    const footerlogoRef = useRef(null);
    //const circleRef = useRef(null);


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
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
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


    //for footer logo animation
    useEffect(() => {
        const footerLogo = footerlogoRef.current;

        gsap.fromTo(
            footerLogo,
            { scale: 0.8 },
            {
              scale: 1.6,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut'
            }
          );

    },[])


    // useEffect(() => {
    //     const firstDiv = ref.current;
    //     const circleDiv = circleRef.current;

    //     const handleMouseEnter = () => {
    //         gsap.to(circleDiv, {
    //             attr: { r: 35 },
    //             fill: '#D4A381',
    //             duration: 0.5
    //         }); 
            
    //         };

    //     const handleMouseLeave = () => {
    //         gsap.to(circleDiv, {
    //             attr: { r: 30 },
    //             fill: '#46200D',
    //             duration: 0.5
    //         });
    //     };

    //     circleDiv.addEventListener('mouseenter', handleMouseEnter);
    //     circleDiv.addEventListener('mouseleave', handleSecondMouseLeave);


    //     //clear 
    //     return () => {
    //         circleDiv.removeEventListener('mouseenter', handleMouseEnter);
    //         circleDiv.removeEventListener('mouseleave', handleSecondMouseLeave);
    //     };

    // }, []);




    return (

        <div className='main-container w-screen' >

            <div className='w-screen h-[1120.5px]'>
                <h1 className='text-[5.2rem] font-semi leading-tight t w-[853.8px] h-[198px] mt-[178.5px] ml-[42px]'>PROPELLING THE <br />
WORLD, BY DESIGN.
                </h1>


            </div>



            <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='second-div py-10' >

                <h1 className='AMET text-8xl mt-80 py-2 ml-5'>AMET MAGNIS DIAM <br />VARIUS VIVERRAAT</h1>
                <p className='text-ms flex justify-end ml-auto mr-20 mt-5'>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br />Voluptatum, sit. Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Obcaecati, debitis?</p>
                <img className='flex justify-end ml-auto mt-20 mr-20 ' src={image3} alt="image3" />

                <img className='px-6' src={image} alt="image" />

            </div>
            <div className='px-6 gap-[6px]'>
            <div className='flex items-centergap-[257.25px] ml-5 py-20 mt-20'>
                <h1 className='text-8xl '>SERVICES</h1>
                <p className='font-semibold text-s ml-[12rem] flex justify-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere <br/> laboriosam soluta asperiores magnam neque quo sint dolores<br/>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>

            </div>
            


            <Swiper

                direction="horizontal"
                spaceBetween={50}
                slidesPerView={0.5}
                mousewheel={{ releaseOnEdges: true, sensitivity: 0.8 }}
                modules={[Mousewheel]}

                draggable={true}
                
            >


                <div className='border-t border-gray-800 h-[873px] py-20 flex space-x-5 '>
                    {/* overflow-x-auto whitespace-nowrap flex space-x-4 */}



                    <SwiperSlide>
                        < div className='flex space-x-[-100px] text-#2C2C2C'>

                            
                            <h1 className='ml-5 text-[220px] leading-none '>CONSULTING <br/>AND STRATEGY</h1>


                            
                            
                            <ul className='leading-loose font-grey-500'>
                                <li className=''>MARKET RESEARCH</li>

                                <li>STAKEHOLDER WORKSHOPS</li>
                                <li>PRODUCT STRATEGY AND ROADMAPPING</li>
                                <li>TECHNOLOGY CONSULTING <br/>AND PLATFORM PLANNING</li>
                                <li>GTM STRATEGY</li>
                            </ul>

                            
                            
                        </div>

                    </SwiperSlide>




                    <SwiperSlide>
                        <div className='flex space-x-[-650px]'>
                            <h1 className='text-[220px] leading-none'>USER<br />EXPERIENCE</h1>
                            <ul className=' leading-loose font-grey-500'>
                                <li>UX AUDIT</li>
                                <li>UX RESEARCH</li>
                                <li>UI UX CONSULTING</li>
                                <li>USER EXPERIENCE DESIGN</li>
                                <li>DIGITAL BRANDING</li>
                            </ul>

                        </div>

                    </SwiperSlide>



                    <SwiperSlide>
                    <div className='flex space-x-[-520px]'>
                        <h1 className='ml-[30px] text-[220px] leading-none'>PRODUCT<br /> DEVELOPMENT</h1>

                        <ul className='leading-loose font-grey-500'>
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
                   <div className='flex space-x-[-400px]'>
                        <h1 className='text-[220px] text-grey-500 leading-none'>DIGITAL<br />MARKETING</h1>
                        <ul className='leading-loose font-grey-500'>
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
                mousewheel={{ releaseOnEdges: true, sensitivity: 0.5 }}

                modules={[Mousewheel]}
                draggable={true}
            >

                <div className='flex'>
                 
                 
                      
                 <SwiperSlide>
                    <img src={image4} alt="image4" />
                    <h3 className='mt-2 font-semibold'>MANGO</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={image5} alt="image5" />
                    <h3 className='mt-2 font-semibold'>COWBOY</h3>

                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={cloth} alt="cloth" />
                    <h3 className='mt-2 font-semibold'>TRADEJINI</h3>

                        
                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={bull} alt="bull" />
                    <h3 className='mt-2 font-semibold'>KLUBB</h3>


                    </SwiperSlide>



                    <SwiperSlide>
                    <img src={phone} alt="phone" />
                    <h3 className='mt-2 font-semibold'>IKEA</h3>


                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={table} alt="table" />
                    <h3 className='mt-2 font-semibold'>WILLIAM ABRAHAM</h3>


                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={socks} alt="socks" />
                    <h3 className='mt-2 font-semibold'>VUORI</h3>


                    </SwiperSlide>

                    <SwiperSlide>
                    <img src={girl} alt="girl" />
                    <h3 className='mt-2 font-semibold'>GIRL</h3>


                    </SwiperSlide>



                </div>

                 
               
                </Swiper>
                

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
                        <div ref={refList}> <ul className=' py-5 justify-end ml-auto px-20 text-[21px] space-y-20'>
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
                    <h1 className=''>LETS TALK</h1>
                </div>

                <div className='h-[120.25px] ml-5'>
                                                                 
                            <div ><img ref={footerlogoRef} className='logo-footer w-[169.5px] h-[60.75px] ' src={footerLogo} alt="footerlogo" /></div>                                           
                            <div><img className='w-[237px] h-[20px] ' src={Rights} alt="rightsfooter" /></div>

                            <div className='flex justify-end mr-10 mt-[-70px]'><img src={footer} alt="footer" /></div>
                                    
                </div>




        </div>


    )
}

export default Hero
