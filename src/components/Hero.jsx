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
        gsap.to(refHeading.current, { duration: 0.5, opacity: 0.5, y: 0, color: "white", textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" });

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
                color: '#D3DAA7',
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


    // useEffect(() => {
    //     if (isListHovered) {
    //         gsap.to(refImage.current, { opacity: 1, duration: 0.5 });
    //         gsap.to(refList.current, {
    //             backgroundColor: '#D3DAA7',
    //             color: 'white',
    //             duration: 0.5
    //         });
    //         gsap.to(refList.current.querySelectorAll('li'), {
    //             fontSize: '1.5rem',
    //             duration: 0.3,
    //             stagger: 0.1
    //         });
    //     } else {
    //         gsap.to(refImage.current, { opacity: 1, duration: 0.5 });
    //         gsap.to(refList.current, {
    //             backgroundColor: 'white',
    //             color: 'black',
    //             duration: 0.3
    //         });
    //         gsap.to(refList.current.querySelectorAll('li'), {
    //             fontSize: '1rem',
    //             duration: 0.3,
    //             stagger: 0.1
    //         });
    //     }
    // }, [isListHovered]);


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

    }, [])


    //About us icon animation
    const circleRef = useRef(null);
    const rect1Ref = useRef(null);
    const rect2Ref = useRef(null);
    const rect3Ref = useRef(null);
    const aboutUsRef = useRef(null);


    const handleAbouUsMouseEnter = () => {
        gsap.to(circleRef.current, {
            scale: 1.1, // Increase size
            duration: 0.5,
            transformOrigin: "50% 50%",
            stroke: "white" // Change stroke color
        });

        gsap.to([rect1Ref.current, rect2Ref.current, rect3Ref.current], {
            x: 10, // Move to the right
            duration: 0.5,
            fill: "white", // Change fill color
            stagger: 0.1
        });
        gsap.to(aboutUsRef.current, {
            fill: "white"
        })
    };

    const handleAboutUsLeave = () => {
        gsap.to(circleRef.current, {
            scale: 1, // Reset size
            duration: 0.5,
            stroke: "black" // Reset stroke color
        });

        gsap.to([rect1Ref.current, rect2Ref.current, rect3Ref.current, aboutUsRef.current], {
            x: 0, // Reset position
            duration: 0.4,
            fill: "black", // Reset fill color
            stagger: 0.1
        });

        // gsap.to(aboutUsRef, {
        //     fill: "black"
        // })
    };


    //Services Button animation
    const circle2Ref = useRef(null);
    const rect4Ref = useRef(null);
    const rect5Ref = useRef(null);
    const rect6Ref = useRef(null);
    const servicesRef = useRef(null);

    const handleServicesMouseEnter = () => {
        gsap.to(circle2Ref.current, {
            scale: 1.1, // Increase size
            duration: 0.5,
            transformOrigin: "50% 50%",
            stroke: "white" // Change stroke color
        });

        gsap.to([rect4Ref.current, rect5Ref.current, rect6Ref.current], {
            x: 10, // Move to the right
            duration: 0.5,
            fill: "white", // Change fill color
            stagger: 0.1
        });
        gsap.to(servicesRef.current, {
            fill: "white"
        })
    };

    const handleServiceMouseLeave = () => {
        gsap.to(circle2Ref.current, {
            scale: 1, // Reset size
            duration: 0.5,
            stroke: "black" // Reset stroke color
        });

        gsap.to([rect4Ref.current, rect5Ref.current, rect6Ref.current, servicesRef.current], {
            x: 0, // Reset position
            duration: 0.4,
            fill: "black", // Reset fill color
            stagger: 0.1
        });


    }


    //Services List Effects Animation
    const servicesListRef = useRef(null);

    useEffect(() => {
        const listItems = servicesListRef.current.children;
        Array.from(listItems).forEach(item => {
          gsap.set(item, { width: 'auto', scale: 1, color: 'black' });
    
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              width: '100%',
              scale: 1.2,
              duration: 0.3,
              ease: 'power1.inOut',
              color: '#D3DAA7'
            });
          });
    
          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              width: 'auto',
              scale: 1,
              duration: 0.3,
              ease: 'power1.inOut',
              color: 'white'
            });
          });
        });
    
        // Cleanup function to remove event listeners when component unmounts
        return () => {
          Array.from(listItems).forEach(item => {
            item.removeEventListener('mouseenter', () => {});
            item.removeEventListener('mouseleave', () => {});
          });
        };
      }, []);


    return (

        <div className='main-container w-screen' >

            <div className='w-screen h-[198px] mt-[178.5px] ml-[42px]'>
                <h1 className='text-[5.2rem] font-semi leading-tight'>PROPELLING THE <br />WORLD, BY DESIGN.
                </h1>
            </div>
            <div className='w-[1328px] h-[598px]'></div>


            {/* About Us Section*/}

            <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='AMET second-div h-[1272px]'>

                <div className=' h-[912px] mt-[129.47px] py-[10rem] ml-[-0.05px] mb-[230.53px]'>
                    <h1 className='text-[80px] mt-[20px] leading-tight ml-5'>AMET MAGNIS DIAM <br />VARIUS VIVERRAAT</h1>

                    <p className='text-ms flex justify-end ml-auto mr-20 mt-5'>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br />Voluptatum, sit. Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Obcaecati, debitis?</p>
                    <img className='w-[653.25px] h-[619.5px]  mt-[40px] ml-[42.09px] mb-[114.94px]' src={image} alt="image" />


                    <div onMouseEnter={handleAbouUsMouseEnter} onMouseLeave={handleAboutUsLeave} className='w-[150.75px] h-[88.5px] mt-[-654.28px] ml-[1133.31px]'>
                        <svg width="152" height="89" viewBox="0 0 152 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle ref={circleRef} cx="106.856" cy="44.4689" r="43.6546" transform="rotate(-90 106.856 44.4689)" stroke="#131313" />
                            <rect ref={rect1Ref} x="97.139" y="45.0488" width="1.15946" height="19.2297" transform="rotate(-90 97.139 45.0488)" fill="#131313" />
                            <rect ref={rect2Ref} x="109.349" y="37.0186" width="1.15946" height="9.75225" transform="rotate(-38.8464 109.349 37.0186)" fill="#131313" />
                            <rect ref={rect3Ref} width="1.15946" height="9.75225" transform="matrix(0.77883 0.627235 0.627235 -0.77883 109.348 51.9147)" fill="#131313" />
                            <path ref={aboutUsRef} d="M9.30517 47.2592H4.06117L2.61717 51.3442H0.774172L5.61917 37.7402H7.86117L12.6302 51.3442H10.7112L9.30517 47.2592ZM8.81117 45.7962L6.72117 39.6212L4.49817 45.7962H8.81117ZM14.3834 51.3442V37.7402H19.9124C21.179 37.7402 22.1607 38.0569 22.8574 38.6902C23.5794 39.3489 23.9404 40.1849 23.9404 41.1982C23.9404 42.5916 23.307 43.5796 22.0404 44.1622C23.6997 44.7956 24.5294 45.8976 24.5294 47.4682C24.5294 48.5576 24.181 49.4696 23.4844 50.2042C22.7624 50.9642 21.768 51.3442 20.5014 51.3442H14.3834ZM16.1124 43.5922H19.4754C20.362 43.5922 21.0207 43.4339 21.4514 43.1172C21.9454 42.7499 22.1924 42.1926 22.1924 41.4452C22.1924 40.6979 21.9454 40.1342 21.4514 39.7542C21.0207 39.4376 20.362 39.2792 19.4754 39.2792H16.1124V43.5922ZM16.1124 49.8052H20.3494C21.122 49.8052 21.7237 49.6026 22.1544 49.1972C22.585 48.7792 22.8004 48.2029 22.8004 47.4682C22.8004 46.7336 22.585 46.1636 22.1544 45.7582C21.7237 45.3402 21.122 45.1312 20.3494 45.1312H16.1124V49.8052ZM32.6286 37.5312C34.7312 37.5312 36.3906 38.2596 37.6066 39.7162C38.6579 40.9829 39.1836 42.5916 39.1836 44.5422C39.1836 46.7842 38.5059 48.5576 37.1506 49.8622C35.9599 50.9896 34.4526 51.5532 32.6286 51.5532C30.5132 51.5532 28.8476 50.8249 27.6316 49.3682C26.5802 48.1016 26.0546 46.4929 26.0546 44.5422C26.0546 42.3002 26.7386 40.5269 28.1066 39.2222C29.2846 38.0949 30.7919 37.5312 32.6286 37.5312ZM32.6096 39.0702C31.0642 39.0702 29.8419 39.6339 28.9426 40.7612C28.1699 41.7492 27.7836 43.0096 27.7836 44.5422C27.7836 46.3029 28.2839 47.6899 29.2846 48.7032C30.1586 49.5772 31.2669 50.0142 32.6096 50.0142C34.1676 50.0142 35.3962 49.4506 36.2956 48.3232C37.0682 47.3352 37.4546 46.0749 37.4546 44.5422C37.4546 42.7816 36.9542 41.3946 35.9536 40.3812C35.0796 39.5072 33.9649 39.0702 32.6096 39.0702ZM50.1593 37.7402H51.8883V47.0692C51.8883 48.5386 51.35 49.6786 50.2733 50.4892C49.3487 51.1986 48.139 51.5532 46.6443 51.5532C44.9217 51.5532 43.5917 51.1036 42.6543 50.2042C41.8437 49.4062 41.4383 48.3612 41.4383 47.0692V37.7402H43.1673V47.0692C43.1673 48.0066 43.4713 48.7349 44.0793 49.2542C44.6873 49.7609 45.5423 50.0142 46.6443 50.0142C47.8097 50.0142 48.709 49.7229 49.3423 49.1402C49.887 48.6209 50.1593 47.9306 50.1593 47.0692V37.7402ZM59.944 39.2792V51.3442H58.215V39.2792H53.731V37.7402H64.39V39.2792H59.944ZM78.5109 37.7402H80.2399V47.0692C80.2399 48.5386 79.7016 49.6786 78.6249 50.4892C77.7002 51.1986 76.4906 51.5532 74.9959 51.5532C73.2732 51.5532 71.9432 51.1036 71.0059 50.2042C70.1952 49.4062 69.7899 48.3612 69.7899 47.0692V37.7402H71.5189V47.0692C71.5189 48.0066 71.8229 48.7349 72.4309 49.2542C73.0389 49.7609 73.8939 50.0142 74.9959 50.0142C76.1612 50.0142 77.0606 49.7229 77.6939 49.1402C78.2386 48.6209 78.5109 47.9306 78.5109 47.0692V37.7402ZM92.7986 41.6542H91.1646C91.1266 39.8809 89.9929 38.9942 87.7636 38.9942C86.8516 38.9942 86.1169 39.2032 85.5596 39.6212C85.0023 40.0266 84.7236 40.5649 84.7236 41.2362C84.7236 41.7429 84.8883 42.1482 85.2176 42.4522C85.5596 42.7436 86.1423 42.9969 86.9656 43.2122L90.1956 44.0482C92.2476 44.5929 93.2736 45.7329 93.2736 47.4682C93.2736 48.7222 92.7733 49.7419 91.7726 50.5272C90.8859 51.2112 89.6129 51.5532 87.9536 51.5532C85.8509 51.5532 84.3246 50.9199 83.3746 49.6532C82.8679 48.9692 82.6019 48.0509 82.5766 46.8982H84.2106V46.9362C84.2106 47.9242 84.5463 48.6906 85.2176 49.2352C85.9016 49.7672 86.8516 50.0332 88.0676 50.0332C89.1823 50.0332 90.0119 49.8496 90.5566 49.4822C91.2026 49.0389 91.5256 48.4182 91.5256 47.6202C91.5256 46.6069 90.6959 45.8912 89.0366 45.4732L85.6546 44.5992C83.8813 44.1432 82.9946 43.0982 82.9946 41.4642C82.9946 40.1722 83.4823 39.1716 84.4576 38.4622C85.3063 37.8416 86.4273 37.5312 87.8206 37.5312C89.7966 37.5312 91.2089 38.1076 92.0576 39.2602C92.5516 39.9316 92.7986 40.6599 92.7986 41.4452C92.7986 41.4832 92.7986 41.5529 92.7986 41.6542Z" fill="#131313" />
                        </svg>

                    </div>





                    {/* <div className='mt-[88.31px] border-black ml-[62.25px] h-[88.31px] w-[88.31px] rounded-100% flex justify items-center text-black'></div>
                    <div >
                        
                    </div> */}

                    {/* <div>
                    <div className='mt-[88.31px] ml-[62.25px] h-[88.31px] w-[88.31px] rounded-100% flex justify items-center text-black'></div>


                    </div> */}

                    {/* <div onMouseEnter={handleAbouUsMouseEnter} onMouseLeave={handleAboutUsLeave}> */}
                    {/* to copy on above div */}







                </div>



            </div>


            {/* Services section */}

            <div className='h-[211.5px] gap-[6px]'>
                <div className='flex gap-[257.25px] h-[96px] ml-[4.2px] py-[57.75px] mr-[170.12px]'>
                    <h1 className='text-[96px] w-[430px]'>SERVICES</h1>
                    <p className='font-semibold text-s ml-[12rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere <br /> laboriosam soluta asperiores magnam neque quo sint dolores<br />Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
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


                {/* overflow-x-auto whitespace-nowrap flex space-x-4 */}

                <div className='h-[873px] w-[7751px]'  >
                    <SwiperSlide>


                        < div className='flex space-x-[-100px] mt-[190.5px] text-#2C2C2C ml-[56.14px]'>


                            <h1 className=' text-[220px] leading-none '>CONSULTING <br />AND STRATEGY</h1>




                            <ul className='leading-loose font-grey-500'>
                                <li className=''>MARKET RESEARCH</li>

                                <li>STAKEHOLDER WORKSHOPS</li>
                                <li>PRODUCT STRATEGY AND ROADMAPPING</li>
                                <li>TECHNOLOGY CONSULTING <br />AND PLATFORM PLANNING</li>
                                <li>GTM STRATEGY</li>
                            </ul>



                        </div>

                    </SwiperSlide>




                    <SwiperSlide>
                        <div className='flex space-x-[-650px] mt-[190.5px]'>
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
                        <div className='flex space-x-[-520px] mt-[190.5px]'>
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
                        <div className='flex space-x-[-400px] mt-[190.5px]'>
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

                <div className='  h-[719px]'>



                    <SwiperSlide className='ml-5'>
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


            <div className='h-[293.25px]'>
                <img src={image6} alt="image6" />
            </div>



             {/* Industries Served Section */}
            <div ref={refSecond} onMouseEnter={handleSecondMouseEnter} onMouseLeave={handleSecondMouseLeave} className='h-[]'>
                {/*  */}
                
                <div className='py-[20rem] h-[163px] w-[552.86px] mt-[305.97px] ml-[45.36px] '>
                    <h1 className='text-[89px] ml-5 leading-tight h-2'>INDUSTRIES<br />WE SERVED</h1></div>
                <div className='w-[] h-[] mt-[] ml-[] mb-[]'  > <p className='font-semibold mt-[-20px] mb-[100px] py-5 text-s px-40 flex justify-end '>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Facere laboriosam soluta</p></div>




                <div onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServiceMouseLeave} className='flex justify-end mr-20'>
                    <svg width="152" height="90" viewBox="0 0 152 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle ref={circle2Ref} cx="106.761" cy="44.8771" r="43.6546" transform="rotate(-90 106.761 44.8771)" stroke="#131313" />
                        <rect ref={rect4Ref} x="97.0435" y="45.4565" width="1.15946" height="19.2297" transform="rotate(-90 97.0435 45.4565)" fill="#131313" />
                        <rect ref={rect5Ref} x="109.253" y="37.427" width="1.15946" height="9.75225" transform="rotate(-38.8464 109.253 37.427)" fill="#131313" />
                        <rect ref={rect6Ref} width="1.15946" height="9.75225" transform="matrix(0.77883 0.627235 0.627235 -0.77883 109.253 52.3223)" fill="#131313" />
                        <path ref={servicesRef} d="M10.721 41.8122H9.08696C9.04896 40.0389 7.91529 39.1522 5.68596 39.1522C4.77396 39.1522 4.03929 39.3612 3.48196 39.7792C2.92462 40.1845 2.64596 40.7229 2.64596 41.3942C2.64596 41.9009 2.81062 42.3062 3.13996 42.6102C3.48196 42.9015 4.06462 43.1549 4.88796 43.3702L8.11796 44.2062C10.17 44.7509 11.196 45.8909 11.196 47.6262C11.196 48.8802 10.6956 49.8999 9.69496 50.6852C8.80829 51.3692 7.53529 51.7112 5.87596 51.7112C3.77329 51.7112 2.24696 51.0779 1.29696 49.8112C0.79029 49.1272 0.52429 48.2089 0.498957 47.0562H2.13296V47.0942C2.13296 48.0822 2.46862 48.8485 3.13996 49.3932C3.82396 49.9252 4.77396 50.1912 5.98996 50.1912C7.10462 50.1912 7.93429 50.0075 8.47896 49.6402C9.12496 49.1969 9.44796 48.5762 9.44796 47.7782C9.44796 46.7649 8.61829 46.0492 6.95896 45.6312L3.57696 44.7572C1.80362 44.3012 0.916957 43.2562 0.916957 41.6222C0.916957 40.3302 1.40462 39.3295 2.37996 38.6202C3.22862 37.9995 4.34962 37.6892 5.74296 37.6892C7.71896 37.6892 9.13129 38.2655 9.97996 39.4182C10.474 40.0895 10.721 40.8179 10.721 41.6032C10.721 41.6412 10.721 41.7109 10.721 41.8122ZM15.4572 45.3082V49.9632H23.4752V51.5022H13.7282V37.8982H23.1522V39.4372H15.4572V43.7692H22.8672V45.3082H15.4572ZM27.9643 45.6502V51.5022H26.2353V37.8982H32.4863C33.9303 37.8982 35.007 38.2529 35.7163 38.9622C36.337 39.5829 36.6473 40.4442 36.6473 41.5462C36.6473 42.3189 36.4763 42.9585 36.1343 43.4652C35.805 43.9719 35.254 44.4152 34.4813 44.7952C35.102 45.0359 35.558 45.3589 35.8493 45.7642C36.1407 46.1822 36.3053 47.0372 36.3433 48.3292C36.3687 49.2792 36.4257 49.9189 36.5143 50.2482C36.6157 50.5649 36.831 50.8372 37.1603 51.0652V51.5022H35.0703C34.7917 50.9195 34.6523 50.3052 34.6523 49.6592L34.6713 47.5312C34.6713 47.3919 34.6143 47.1765 34.5003 46.8852C34.3863 46.5939 34.2787 46.3849 34.1773 46.2582C33.8353 45.8529 33.2527 45.6502 32.4293 45.6502H27.9643ZM27.9643 44.1112H32.1633C33.9493 44.1112 34.8423 43.3322 34.8423 41.7742C34.8423 40.2162 33.9493 39.4372 32.1633 39.4372H27.9643V44.1112ZM45.2921 51.5022H43.4111L38.5281 37.8982H40.3901L44.3991 49.4122L48.1611 37.8982H50.0041L45.2921 51.5022ZM54.0562 37.8982V51.5022H52.2892V37.8982H54.0562ZM67.9726 42.0592H66.1866C65.9966 41.1472 65.6672 40.4822 65.1986 40.0642C64.5906 39.5069 63.7039 39.2282 62.5386 39.2282C61.1199 39.2282 60.0242 39.7855 59.2516 40.9002C58.5802 41.8755 58.2446 43.1549 58.2446 44.7382C58.2446 46.5242 58.6942 47.9112 59.5936 48.8992C60.3916 49.7479 61.4176 50.1722 62.6716 50.1722C64.2042 50.1722 65.2619 49.6085 65.8446 48.4812C66.1106 47.9619 66.3196 47.2715 66.4716 46.4102H68.2576C67.8396 49.9442 65.9839 51.7112 62.6906 51.7112C60.9172 51.7112 59.5176 51.1919 58.4916 50.1532C57.1742 48.8232 56.5156 47.0372 56.5156 44.7952C56.5156 42.6165 57.1489 40.8242 58.4156 39.4182C59.4542 38.2655 60.8856 37.6892 62.7096 37.6892C65.6736 37.6892 67.4279 39.1459 67.9726 42.0592ZM72.4943 45.3082V49.9632H80.5123V51.5022H70.7653V37.8982H80.1893V39.4372H72.4943V43.7692H79.9043V45.3082H72.4943ZM92.6585 41.8122H91.0245C90.9865 40.0389 89.8528 39.1522 87.6235 39.1522C86.7115 39.1522 85.9768 39.3612 85.4195 39.7792C84.8621 40.1845 84.5835 40.7229 84.5835 41.3942C84.5835 41.9009 84.7481 42.3062 85.0775 42.6102C85.4195 42.9015 86.0021 43.1549 86.8255 43.3702L90.0555 44.2062C92.1075 44.7509 93.1335 45.8909 93.1335 47.6262C93.1335 48.8802 92.6331 49.8999 91.6325 50.6852C90.7458 51.3692 89.4728 51.7112 87.8135 51.7112C85.7108 51.7112 84.1845 51.0779 83.2345 49.8112C82.7278 49.1272 82.4618 48.2089 82.4365 47.0562H84.0705V47.0942C84.0705 48.0822 84.4061 48.8485 85.0775 49.3932C85.7615 49.9252 86.7115 50.1912 87.9275 50.1912C89.0421 50.1912 89.8718 50.0075 90.4165 49.6402C91.0625 49.1969 91.3855 48.5762 91.3855 47.7782C91.3855 46.7649 90.5558 46.0492 88.8965 45.6312L85.5145 44.7572C83.7411 44.3012 82.8545 43.2562 82.8545 41.6222C82.8545 40.3302 83.3421 39.3295 84.3175 38.6202C85.1661 37.9995 86.2871 37.6892 87.6805 37.6892C89.6565 37.6892 91.0688 38.2655 91.9175 39.4182C92.4115 40.0895 92.6585 40.8179 92.6585 41.6032C92.6585 41.6412 92.6585 41.7109 92.6585 41.8122Z" fill="#131313" />
                    </svg>
                </div>




                <div ref={refImage} onMouseEnter={handleThirdMouseEnter} onMouseLeave={handleThirdMouseLeave} className='flex'>
                    <div className=''> <img src={glass} alt="glass" /></div>
                    <div className='w-[1440px]' ref={refList}> 
                    
                    <div >
                    <ul ref={servicesListRef}  className=' py-5 justify-end ml-auto px-20 text-[21px] space-y-20'>
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
