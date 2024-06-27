import React, { useState, useRef, useEffect } from 'react';


import image from '../assets/Frame 567.svg';
// import image2 from '../assets/Frame 461.svg';


import image4 from '../assets/pexels-anh-khac-6318739 1.png';
import image5 from '../assets/pexels-deva-darshan-1173777 1.png';
import image6 from '../assets/companiesname.svg';
import cloth from '../assets/iStock-182864957 2.png';
import bull from '../assets/iStock-1223076208 1.png';
import phone from '../assets/Frame 1000001741.png';
import table from '../assets/Frame 1000001741 (1).png';
import socks from '../assets/Frame 1000001741 (2).png';
import girl from '../assets/Frame 1000001741 (3).png';



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Mousewheel } from "swiper/modules";

import gsap from 'gsap';
//import { useGSAP } from '@gsap/react';









const Hero = () => {

    const ref = useRef(null);
    const refSecond = useRef(null);
    const refImage = useRef(null);
    const refList = useRef(null);

    const footerlogoRef = useRef(null);
    //const circleRef = useRef(null);


    const [isHovered, setisHovered] = useState(false);
    const [isSecondHovered, setisSecondHovered] = useState(false);
    const [isListHovered, setisListHovered] = useState(false);





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

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        const handleChange = () => {
            if (mediaQuery.matches) {
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
        };

        handleChange(); // Initial check
        mediaQuery.addListener(handleChange); // Add listener to media query

        return () => {
            mediaQuery.removeListener(handleChange); // Cleanup listener on unmount
        };
    }, []);



    
    const circleRef = useRef(null);
    const rect1Ref = useRef(null);
    
    const aboutUsRef = useRef(null);


    const handleAbouUsMouseEnter = () => {
        gsap.to(circleRef.current, {
            scale: 1.1, 
            duration: 0.5,
            transformOrigin: "50% 50%",
            
            fill: 'linear-gradient(45deg, #BCC66F, #517435)',
            filter: "invert(100%)"


        });

        gsap.to(rect1Ref.current, {
            x: 18, 
            duration: 0.5,
            transformOrigin: "50% 50%  ",
            stagger: 0.1,
            color: 'white',
            filter: "invert(100%)"


        });
        gsap.to(aboutUsRef.current, {
            filter: "invert(100%)"
            //color: 'white'

        })
    };

    const handleAboutUsLeave = () => {
        gsap.to(circleRef.current, {
            scale: 1, // Reset size
            duration: 0.5,
            stroke: "black",
            // fill: "linear-gradient(180deg, #D4A381, #46200D)"
            filter: "invert(50%)" // Reset stroke color
        });

        gsap.to(rect1Ref.current, {
            x: 0, // Reset position
            duration: 0.4,
            //color: 'black',
            filter: "invert(100%)", // Reset fill color
            stagger: 0.1
        });


        gsap.to(aboutUsRef, {
            filter: "invert(100%)",
            color: 'black'
        })
    };





    return (
        <section className=' '>
            <div className='main-container '>
                <div className='mt-20 px-4 md:px-10 lg:px-20'>
                    <h1 className='text-3xl max-sm:ml-2 md:text-5xl lg:text-6xl max-md:ml-5 max-md:text-[30px] xl:ml-[4.2px] xl:mt-[175.5px] xl:text-[89px] 2xl:text-8xl max-sm:text-2xl leading-tight'>
                        PROPELLING THE <br />WORLD, BY DESIGN.
                    </h1>
                </div>

                <div className="w-full h-auto mx-auto max-sm:w-[600px] max-sm:h-[80px] max-md:h-[150px] md:h-[400px] max-lg:w-[1000px] max-lg:h-[100px] xl:w-[1328px] max-xl:h-[598px]"></div>



                {/* About Us Section*/}

                <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=' second-div h-[1272px] max-sm:h-[600px] max-sm:w-screen sm:w-screen max-sm:py-2 max-md:h-[800px]  max-lg:h-[850px] py-20'>
                    <div onMouseEnter={handleAbouUsMouseEnter} onMouseLeave={handleAboutUsLeave} className='py-10'>
                        <h1 className=' max-sm:text-2xl   max-sm:ml-6 max-xl:text-[89px] max-lg:text-[150px] md:text-[48px] max-md:text-[30px] xl:text-[89px] 2xl:text-[89px] leading-tight ml-[42.09px]'>
                            AMET MAGNIS DIAM <br />VARIUS VIVERRAAT
                        </h1>

                        <p className='text-[15px]  max-sm:text-[10px] lg:mr-[140px] max-sm:mr-[45px] max-lg:mr-[20px] max-md:text-[10px] max-lg:text-[15px] xl:mr-[230px] xl:text-[15px] 2xl:mt-2 2xl:text-2xl flex justify-end ml-auto mr-5 md:mr-10 mt-5 md:mt-5'>
                            Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br />Voluptatum, sit. Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Obcaecati, debitis?
                        </p>
                        <div class="relative">
                            <img className='mt-[40px] ml-[42.09px] mb-[114.94px] w-[653.25px] max-sm:mt-[60px] max-sm:w-[300px] max-sm:h-[300px] max-sm:ml-3  max-md:w-[400px] max-lg:w-[420px] max-xl:w-[653.25px] max-2xl:w-[700px]' src={image} alt="image" />
                        </div>


                        <div className='relative
  w-[200.75px] h-[88.5px] mt-[-720.28px] 
  ml-[1100.31px] max-sm:w-[50.45px] max-sm:hidden max-sm:h-[50px] max-sm:mt-[-500px] 
      
  sm:w-[113.0625px]  max-sm:ml-[50px] sm:ml-[450px] md:ml-[500px] 
  max-md:w-[100.675px] max-md:ml-[700px] md:mr-[-100px] max-lg:mt-[-500px]
  max-lg:w-[200.75px] max-lg:ml-[-500px] lg:ml-[850px] lg:mt-[-780px]
  max-xl:w-[150.75px] max-xl:ml-[-700px] xl:ml-[1100px] min-xl:mb[-500px]
  2xl:ml-[1550px] 
  max-2xl:w-[180.9px] max-2xl:ml-[1300px]'>
                            <svg ref={circleRef} className='ml-[62.25px]' width="90" height="89" viewBox="0 0 90 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="44.8558" cy="44.4689" r="43.6546" transform="rotate(-90 44.8558 44.4689)" stroke="#131313" /></svg>

                            <svg ref={rect1Ref} className='ml-[6rem] mt-[-50px]' width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.138977" y="9.04883" width="1.15946" height="19.2297" transform="rotate(-90 0.138977 9.04883)" fill="#131313" />
                                <rect x="12.3485" y="1.01855" width="1.15946" height="9.75225" transform="rotate(-38.8464 12.3485 1.01855)" fill="#131313" />
                                <rect width="1.15946" height="9.75225" transform="matrix(0.77883 0.627235 0.627235 -0.77883 12.3484 15.9147)" fill="#131313" />
                            </svg>


                            <svg ref={aboutUsRef} className='mt-[-18px]  mb-[33.47px] mr-[56.75px]' width="94" height="15" viewBox="0 0 94 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.30517 10.2592H4.06117L2.61717 14.3442H0.774172L5.61917 0.740238H7.86117L12.6302 14.3442H10.7112L9.30517 10.2592ZM8.81117 8.79624L6.72117 2.62124L4.49817 8.79624H8.81117ZM14.3834 14.3442V0.740238H19.9124C21.179 0.740238 22.1607 1.0569 22.8574 1.69024C23.5794 2.3489 23.9404 3.1849 23.9404 4.19824C23.9404 5.59157 23.307 6.57957 22.0404 7.16224C23.6997 7.79557 24.5294 8.89757 24.5294 10.4682C24.5294 11.5576 24.181 12.4696 23.4844 13.2042C22.7624 13.9642 21.768 14.3442 20.5014 14.3442H14.3834ZM16.1124 6.59224H19.4754C20.362 6.59224 21.0207 6.4339 21.4514 6.11724C21.9454 5.7499 22.1924 5.19257 22.1924 4.44524C22.1924 3.6979 21.9454 3.13424 21.4514 2.75424C21.0207 2.43757 20.362 2.27924 19.4754 2.27924H16.1124V6.59224ZM16.1124 12.8052H20.3494C21.122 12.8052 21.7237 12.6026 22.1544 12.1972C22.585 11.7792 22.8004 11.2029 22.8004 10.4682C22.8004 9.73357 22.585 9.16357 22.1544 8.75824C21.7237 8.34024 21.122 8.13124 20.3494 8.13124H16.1124V12.8052ZM32.6286 0.531237C34.7312 0.531237 36.3906 1.25957 37.6066 2.71624C38.6579 3.9829 39.1836 5.59157 39.1836 7.54224C39.1836 9.78424 38.5059 11.5576 37.1506 12.8622C35.9599 13.9896 34.4526 14.5532 32.6286 14.5532C30.5132 14.5532 28.8476 13.8249 27.6316 12.3682C26.5802 11.1016 26.0546 9.4929 26.0546 7.54224C26.0546 5.30024 26.7386 3.5269 28.1066 2.22224C29.2846 1.0949 30.7919 0.531237 32.6286 0.531237ZM32.6096 2.07024C31.0642 2.07024 29.8419 2.6339 28.9426 3.76124C28.1699 4.74924 27.7836 6.00957 27.7836 7.54224C27.7836 9.3029 28.2839 10.6899 29.2846 11.7032C30.1586 12.5772 31.2669 13.0142 32.6096 13.0142C34.1676 13.0142 35.3962 12.4506 36.2956 11.3232C37.0682 10.3352 37.4546 9.0749 37.4546 7.54224C37.4546 5.78157 36.9542 4.39457 35.9536 3.38124C35.0796 2.50724 33.9649 2.07024 32.6096 2.07024ZM50.1593 0.740238H51.8883V10.0692C51.8883 11.5386 51.35 12.6786 50.2733 13.4892C49.3487 14.1986 48.139 14.5532 46.6443 14.5532C44.9217 14.5532 43.5917 14.1036 42.6543 13.2042C41.8437 12.4062 41.4383 11.3612 41.4383 10.0692V0.740238H43.1673V10.0692C43.1673 11.0066 43.4713 11.7349 44.0793 12.2542C44.6873 12.7609 45.5423 13.0142 46.6443 13.0142C47.8097 13.0142 48.709 12.7229 49.3423 12.1402C49.887 11.6209 50.1593 10.9306 50.1593 10.0692V0.740238ZM59.944 2.27924V14.3442H58.215V2.27924H53.731V0.740238H64.39V2.27924H59.944ZM78.5109 0.740238H80.2399V10.0692C80.2399 11.5386 79.7016 12.6786 78.6249 13.4892C77.7002 14.1986 76.4906 14.5532 74.9959 14.5532C73.2732 14.5532 71.9432 14.1036 71.0059 13.2042C70.1952 12.4062 69.7899 11.3612 69.7899 10.0692V0.740238H71.5189V10.0692C71.5189 11.0066 71.8229 11.7349 72.4309 12.2542C73.0389 12.7609 73.8939 13.0142 74.9959 13.0142C76.1612 13.0142 77.0606 12.7229 77.6939 12.1402C78.2386 11.6209 78.5109 10.9306 78.5109 10.0692V0.740238ZM92.7986 4.65424H91.1646C91.1266 2.8809 89.9929 1.99424 87.7636 1.99424C86.8516 1.99424 86.1169 2.20324 85.5596 2.62124C85.0023 3.02657 84.7236 3.5649 84.7236 4.23624C84.7236 4.7429 84.8883 5.14824 85.2176 5.45224C85.5596 5.74357 86.1423 5.9969 86.9656 6.21224L90.1956 7.04824C92.2476 7.5929 93.2736 8.7329 93.2736 10.4682C93.2736 11.7222 92.7733 12.7419 91.7726 13.5272C90.8859 14.2112 89.6129 14.5532 87.9536 14.5532C85.8509 14.5532 84.3246 13.9199 83.3746 12.6532C82.8679 11.9692 82.6019 11.0509 82.5766 9.89824H84.2106V9.93624C84.2106 10.9242 84.5463 11.6906 85.2176 12.2352C85.9016 12.7672 86.8516 13.0332 88.0676 13.0332C89.1823 13.0332 90.0119 12.8496 90.5566 12.4822C91.2026 12.0389 91.5256 11.4182 91.5256 10.6202C91.5256 9.6069 90.6959 8.89124 89.0366 8.47324L85.6546 7.59924C83.8813 7.14324 82.9946 6.09824 82.9946 4.46424C82.9946 3.17224 83.4823 2.17157 84.4576 1.46224C85.3063 0.841571 86.4273 0.531237 87.8206 0.531237C89.7966 0.531237 91.2089 1.10757 92.0576 2.26024C92.5516 2.93157 92.7986 3.6599 92.7986 4.44524C92.7986 4.48324 92.7986 4.5529 92.7986 4.65424Z" fill="#131313" />
                            </svg>

                        </div>







                    </div>





                </div>


                {/* Services section */}

                <div className='h-[211.5px] max-sm:h-[50px] max-lg:h-[30px] w-full gap-[6px]   ml-5'>
                    <div className='flex  max-sm:space-x-2 max-md:space-x-[120px] py-[57.75px] max-sm:flex-col  mr-[80.12px]'>
                        <h1 className='text-[30px] ml-[4.2px] max-sm:text-2xl max-md:text-[30px] xl:ml-[42px] xl:text-[86.43px] max-lg:text-[50px] max-xl:text-[89px] 2xl:text-[96px] w-auto md:w-[430px] '>SERVICES</h1>
                        <p className=' text-[15px] max-sm:text-[10px] sm:mr-[50px] max-sm:mt-[10px] max-md:mt-[7px] max-md:text-[10px] md:text-[10px] md:mt-[5px] lg:text-[15px]  max-xl:text-[15px] ml-0 md:ml-[12rem] max-xl:mt-[30px] w-full md:w-auto xl:mt-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere <br /> laboriosam soluta asperiores magnam neque quo sint dolores</p>
                    </div>
                </div>




                <Swiper

                    direction="horizontal"
                    spaceBetween={50}
                    
                    slidesPerView={0.5}
                    mousewheel={{ releaseOnEdges: true, sensitivity: 0.8 }}
                    modules={[Mousewheel]}

                    draggable={false}
                    touchReleaseOnEdges={true}
                    freeMode={true}
                    // freeModeSticky={false}
                    // freeModeNoMomentumRelease={true}
                    // freeModeMomentumRatio={0.3}

                >


                    {/* overflow-x-auto whitespace-nowrap flex space-x-4 */}

                    <div className='h-[873px]  w-full'>
                        <SwiperSlide>
                            <div className='flex max-sm:ml-1  max-md:flex-row space-y-4 max-xl:space-x-[5px] max-md:space-y-0 max-md:space-x-[40px] mt-[190.5px] text-#2C2C2C ml-[56.14px]'>
                                <h1 className='text-[220px] leading-none max-md:text-[100px] max-lg:text-[100px] max-sm:text-[40px] max-xl:text-[120px] max-2xl:text-[250px]'>
                                    CONSULTING <br />AND STRATEGY
                                </h1>
                                <ul className='leading-loose font-grey-500'>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        MARKET RESEARCH
                                    </li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        STAKEHOLDER WORKSHOPS
                                    </li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        PRODUCT STRATEGY AND ROADMAPPING
                                    </li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        TECHNOLOGY CONSULTING <br />AND PLATFORM PLANNING
                                    </li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        GTM STRATEGY
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex  max-sm:ml-1 max-md:flex-row space-y-4  max-xl:space-x-[5px] max-md:space-y-0 max-md:space-x-[40px] mt-[190.5px] text-#2C2C2C ml-[56.14px]'>
                                <h1 className='text-[220px] leading-none max-md:text-[100px] max-lg:text-[100px] max-sm:text-[40px] max-xl:text-[120px] max-2xl:text-[300px]'>
                                    USER<br />EXPERIENCE
                                </h1>
                                <ul className='leading-loose  font-grey-500'>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        UX AUDIT
                                    </li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        UX RESEARCH
                                    </li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        UI UX CONSULTING
                                    </li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        USER EXPERIENCE DESIGN
                                    </li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>
                                        DIGITAL BRANDING
                                    </li>
                                </ul>

                            </div>

                        </SwiperSlide>



                        <SwiperSlide>
                            <div className='flex  max-sm:ml-1 max-md:flex-row space-y-4 max-xl:space-x-[5px] max-md:space-y-0 max-md:space-x-[40px] mt-[190.5px] text-#2C2C2C ml-[56.14px]'>
                                <h1 className='text-[220px] leading-none max-md:text-[100px] max-lg:text-[100px] max-sm:text-[40px] max-xl:text-[120px] max-2xl:text-[300px]'>PRODUCT<br /> DEVELOPMENT</h1>

                                <ul className='leading-loose font-grey-500'>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>WEBSITE DEVELOPMENT</li>

                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>WEB APP DEVELOPMENT</li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>E-COMMERCE DEVELOPMENT</li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>MVP DEVELOPMENT</li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>NATIVE APP DEVELOPMENT</li>
                                    <li className='ttext-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>HYBRID APP DEVELOPMENT</li>
                                </ul>
                            </div>

                        </SwiperSlide>




                        <SwiperSlide>
                            <div className='flex max-sm:ml-1  max-md:flex-row space-y-4 max-xl:space-x-[50px] max-md:space-y-0 max-md:space-x-[40px] mt-[190.5px] text-#2C2C2C ml-[56.14px]'>
                                <h1 className='text-[220px] leading-none max-md:text-[100px] max-lg:text-[100px] max-sm:text-[40px] max-xl:text-[120px] max-2xl:text-[300px]'>DIGITAL<br />MARKETING</h1>
                                <ul className='leading-loose font-grey-500'>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>SEO</li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>SOCIAL MEDIA</li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>PAID SEARCH</li>
                                    <li className='text-[16px] max-md:text-[10px] max-lg:text-[12px] max-sm:text-[6px] max-xl:text-[16px] max-2xl:text-[20px]'>PAID SOCIAL</li>

                                </ul>

                            </div>

                        </SwiperSlide>

                    </div>











                </Swiper>





              {/* PORTFOLIO SECTION */}

                <div className=' flex flex-col max-sm:mt-0 md:flex-row  ml-5 py-20 mt-20'>
                    <h1 className=' max-md:text-[40px]  max-sm:ml-[5px] max-lg:text-[50px] xl:ml-[42px] xl:text-[86.43px] max-xl:text-[86.43px] max-2xl:text-[100px]'>
                        PORTFOLIO
                    </h1>
                    <p className='font-semibold text-s max-sm:mr-[80px] max-sm:mt-0 max-md:text-[10px] md:mt-[10px]  max-md:ml-[20px] max-lg:text-[12px] xl:text-[15px] xl:mr-[171.37px] 2xl:text-2xl px-0 md:px-10 lg:px-20 flex justify-end ml-auto mt-10 '>
                        Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Facere laboriosam soluta
                    </p>
                </div>


                <Swiper
                    direction="horizontal"
                    // spaceBetween={0}
                    // slidesPerView={0} // Default to 1 slide per view
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1 }, // 1.5 slides per view on small screens
                        768: { slidesPerView: 1.5 }, // 2 slides per view on medium screens
                        1024: { slidesPerView: 1.8, spaceBetween: 20 }, // 3 slides per view on large screens
                        1280: { slidesPerView: 2.1, spaceBetween: 20 },
                        1440: { slidesPerView: 2.1, spaceBetween: 10 },
                        1536: { slidesPerView: 2.1, spaceBetween: 10 }
                          // 4 slides per view on extra large screens
                    }}
                    mousewheel={{ releaseOnEdges: true, sensitivity: 1 }}
                    modules={[Mousewheel]}
                    draggable={true}
                    freeMode={true}
                >
                    <div className='h-[719px]  w-full mx-auto  items-center'>
                        <SwiperSlide className=' ml-[42px] max-sm:ml-3      '>
                            <img src={image4} alt="MANGO" className=' w-full h-auto max-sm:w-[300px] max-sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[653px] lg:w-[653px]   flex items-center justify-center md:items-start md:justify-start ' />
                            <h3 className='mt-2 flex items-start font-semibold text-center text-base md:text-lg lg:text-xl xl:text-2xl'>MANGO</h3>
                        </SwiperSlide>

                        <SwiperSlide className=' '>
                            <img src={image5} alt="COWBOY" className='w-full h-auto max-sm:w-[300px] max-sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[653px] lg:w-[653px]' />
                            <h3 className='mt-2 flex items-start font-semibold text-center text-base md:text-lg lg:text-xl xl:text-2xl'>COWBOY</h3>
                        </SwiperSlide>

                        <SwiperSlide className='  '>
                            <img src={cloth} alt="TRADEJINI" className='w-full h-auto max-sm:w-[300px] max-sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[653px] lg:w-[653px]' />
                            <h3 className='mt-2 flex items-start font-semibold text-center text-base md:text-lg lg:text-xl xl:text-2xl'>TRADEJINI</h3>
                        </SwiperSlide>

                        <SwiperSlide className='  '>
                            <img src={bull} alt="KLUBB" className='w-full h-auto max-sm:w-[300px] max-sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[653px] lg:w-[653px]' />
                            <h3 className='mt-2 flex items-start font-semibold text-center text-base md:text-lg lg:text-xl xl:text-2xl'>KLUBB</h3>
                        </SwiperSlide>

                        <SwiperSlide className='  '>
                            <img src={phone} alt="IKEA" className='w-full h-auto max-sm:w-[300px] max-sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[653px] lg:w-[653px]' />
                            <h3 className='mt-2  flex items-start font-semibold text-center text-base md:text-lg lg:text-xl xl:text-2xl'>IKEA</h3>
                        </SwiperSlide>

                        <SwiperSlide className='  '>
                            <img src={table} alt="WILLIAM ABRAHAM" className='w-full h-auto max-sm:w-[300px] max-sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[653px] lg:w-[653px]' />
                            <h3 className='mt-2 flex items-start font-semibold text-center text-base md:text-lg lg:text-xl xl:text-2xl'>WILLIAM ABRAHAM</h3>
                        </SwiperSlide>

                        <SwiperSlide className=' '>
                            <img src={socks} alt="VUORI" className='w-full h-auto max-sm:w-[300px] max-sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[653px] lg:w-[653px]' />
                            <h3 className='mt-2 flex items-start font-semibold text-center text-base md:text-lg lg:text-xl xl:text-2xl'>VUORI</h3>
                        </SwiperSlide>

                        <SwiperSlide className=' max-sm:ml-1'>
                            <img src={girl} alt="GIRL" className='w-full h-auto max-sm:w-[300px] max-sm:h-[300px] md:w-[500px] md:h-[500px] lg:h-[653px] lg:w-[653px]' />
                            <h3 className='mt-2 flex items-start font-semibold text-center text-base md:text-lg lg:text-xl xl:text-2xl'>GIRL</h3>
                        </SwiperSlide>
                    </div>
                </Swiper>



                <div className='relative h-[293.25px]  md:h-[250px] lg:h-[293.25px] w-full max-w-[1440px] mx-auto'>
                    <img src={image6} alt="image6" className=' w-full h-auto ' />
                </div>















            </div >

        </section>





    )
}
export default Hero
