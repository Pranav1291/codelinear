import React, { useEffect, useRef } from 'react';
import footerLogo from '../assets/Frame 513.svg';
import Rights from '../assets/© Codelinear 2023. All Rights Reserved..png';
import footer from '../assets/Frame 218.svg';
import gsap from 'gsap';

const Footer = () => {
    // const imageRef = useRef(null);
    // const textRef = useRef(null);

    // useEffect(() => {
    //     const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });


    //     tl.to(imageRef.current, {
    //         duration: 1,
    //         scale: 2,
    //         ease: 'power1.inOut',
    //         onComplete: () => {

    //             gsap.to(textRef.current, {
    //                 duration: 1,
    //                 opacity: 1,
    //                 ease: 'power1.inOut'
    //             });
    //         }
    //     });


    //     tl.to(imageRef.current, {
    //         duration: 1,
    //         scale: 2,
    //         ease: 'power1.inOut',
    //         onComplete: () => {

    //             gsap.to(textRef.current, {
    //                 duration: 0.5,
    //                 opacity: 0,
    //                 ease: 'power1.inOut'
    //             });
    //         }
    //     }, '+=2');

    // }, []);

    return (
        <section className='text-center '>
            <div className="h-auto ml-5 md:ml-10">

                <div className="relative">
                    <img
                        // ref={imageRef}
                        className="relative overflow-hidden logo-footer w-full max-w-xs object-cover"
                        src={footerLogo}
                        alt="footerlogo"
                    />
                    <div
                        // ref={textRef}
                        className="absolute bottom-0 right-0 p-2 opacity-0 text-sm md:text-base lg:text-lg"
                    >
                        to impact
                    </div>
                </div>

                <div className="mt-8 md:mt-10">
                    <img
                        className="w-full max-w-sm h-auto"
                        src={Rights}
                        alt="rightsfooter"
                    />
                </div>

                <div className="flex justify-end mr-4 md:mr-10 mt-[-70px] md:mt-[-80px] lg:mt-[-90px]">
                    <img className="w-full max-w-2xl h-auto" src={footer} alt="footer" />
                </div>

            </div>



        </section>

    )
}

export default Footer
