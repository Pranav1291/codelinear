import React from 'react';
import footerLogo from '../assets/Frame 513.svg';
import Rights from '../assets/© Codelinear 2023. All Rights Reserved..png';
import footer from '../assets/Frame 218.svg';

const Footer = () => {
    return (
        <div>
            <div className='h-[120.25px] ml-5'>

                <div ><img className='logo-footer w-[169.5px] h-[60.75px] ' src={footerLogo} alt="footerlogo" /></div>

                <div className='mt-[30px]'><img className='w-[237px] h-[15px] ' src={Rights} alt="rightsfooter" /></div>

                <div className='flex justify-end mr-10 mt-[-70px]'><img src={footer} alt="footer" /></div>

            </div>
        </div>
    )
}

export default Footer
