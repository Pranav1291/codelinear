import React, { useRef } from 'react';
import gsap from 'gsap';



const LetsTalk = () => {
    const refHeading = useRef(null);


    const handleHeadingMouseEnter = () => {
        gsap.to(refHeading.current, { duration: 0.5, opacity: 0.5, y: 0, color: "white", textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" });

    }

    const handleHeadingMouseLeave = () => {
        gsap.to(refHeading.current, { duration: 0.5, opacity: 0, y: 0, });
    }



  return (
    <section className=''>
    
      <div className='text-2xl w-[1440px]-full text-semibold flex justify-center mt-5 h-[4rem]'>
                <h4 className=''>Wanna Know a Secret ?</h4><br />

            </div>

            <div ref={refHeading} onMouseEnter={handleHeadingMouseEnter} onMouseLeave={handleHeadingMouseLeave} className='text-[139.28px] flex justify-center mt-[50px]'>
                <h1 className=''>LETS TALK</h1>
            </div>
            <div className='border-t border-grey-500 flex items-center '>

     </div>
     </section>
    
  )
}

export default LetsTalk
