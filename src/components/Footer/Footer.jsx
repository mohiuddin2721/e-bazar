import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { footerContactData, footerCustomerServiceData, footerPopularTag } from '../../Utils/FooterData';
import { footerInputStyle, footerPopularTagSpanStyle, footerSocialButtonStyle, footerSubscribeButtonStyle } from '../../Styles/FooterStyle';

const Footer = () => {
  return (
    <footer className='bg-[#222529] text-[11.5px] sm:text-[13px] leading-6 text-[#777]'>
      <div className='pt-[65px] pb-[23px] max-w-[1200px] mx-auto'>
        <div className='px-[10px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='px-[10px]'>
            <div className='mb-[30px]'>
              <p className='text-white text-[18px] font-semibold mb-[17px]'>CONTACT INFO</p>
              <ul className='mb-[30px] text-[13px]'>
                {
                  footerContactData?.map((data, i) =>
                    <li key={i} className='flex flex-col mb-[10px]'>
                      <span className='text-white'>{data?.name}</span>
                      <span className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500'>{data?.detail}</span>
                    </li>
                  )
                }
              </ul>
              <div className='flex'>
                <div className={footerSocialButtonStyle}>
                  <FaFacebookF />
                </div>
                <div className={footerSocialButtonStyle}>
                  <FaTwitter />
                </div>
                <div className={footerSocialButtonStyle}>
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
          <div className='px-[10px]'>
            <div className='mb-[30px]'>
              <p className='text-white text-[18px] font-semibold mb-[17px]'>CUSTOMER SERVICE</p>
              <ul className='mb-[22px]'>
                {
                  footerCustomerServiceData?.map((data, i) =>
                    <li key={i} className='text-[#777] w-fit hover:text-[#08c] cursor-pointer duration-500'>{data}</li>
                  )
                }

              </ul>
            </div>
          </div>
          <div className='px-[10px]'>
            <div className='mb-[30px]'>
              <p className='text-white text-[18px] font-semibold mb-[17px]'>POPULAR TAGS</p>
              <div className='flex flex-wrap text-[11px]'>
                {
                  footerPopularTag?.map((data, i) =>
                    <span key={i} className={footerPopularTagSpanStyle}>{data}</span>
                  )
                }
              </div>
            </div>
          </div>
          <div className='px-[10px]'>
            <div className='mb-[30px]'>
              <p className='text-white text-[18px] font-semibold mb-[17px]'>SUBSCRIBE NEWSLETTER</p>
              <p className='mb-[13px]'>Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
            </div>
            <div className='form flex flex-col'>
              <input type="email" placeholder='Email Address' className={footerInputStyle} />
              <button className={footerSubscribeButtonStyle}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;