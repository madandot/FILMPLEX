import React from "react";
import "../../App.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='py-4 my-4'>
               <ul className='flex items-center justify-center md:gap-x-12 gap-x-3 text-white md:text-base md:font-medium '>
                  <li className='hover:text-pink-700 cursor-pointer transition duration-500'>Terms Of Use</li>
                  <li className='hover:text-pink-700 cursor-pointer transition duration-500'>Privacy-Policy</li>
                  <li className='hover:text-pink-700 cursor-pointer transition duration-500'>About</li>
                  <li className='hover:text-pink-700 cursor-pointer transition duration-500'>Blog</li>
                  <li className='hover:text-pink-700 cursor-pointer transition duration-500'>FAQ</li>
               </ul>
            </div>
            <div className='text-center text-white text-base font-medium pb-8'>
               <p>
                  Stay updated with the latest releases and exclusive offers by subscribing to our newsletter.Contact us for any inquiries
                  or assistance; our team is here to help enhance your entertainment experience.
               </p>
            </div>
            <div className='flex items-center justify-center gap-10 mb-10 '>
               <div
                  onClick={() => window.open("https://www.facebook.com/", "_target")}
                  className='flex items-center justify-center cursor-pointer bg-[#04152d] w-10 h-10  rounded-full icon'
               >
                  <FaFacebookF size={30} />
               </div>
               <div
                  onClick={() => window.open("https://www.instagram.com/", "_target")}
                  className='flex items-center justify-center cursor-pointer bg-[#04152d] w-10 h-10  rounded-full icon'
               >
                  <FaInstagram size={30} />
               </div>
               <div
                  onClick={() => window.open("https://www.twitter.com/", "_target")}
                  className='flex items-center justify-center cursor-pointer bg-[#04152d] w-10 h-10  rounded-full icon'
               >
                  <FaTwitter size={30} />
               </div>
               <div
                  onClick={() => window.open("https://www.linkedin.com/", "_target")}
                  className='flex items-center justify-center cursor-pointer bg-[#04152d] w-10 h-10  rounded-full icon'
               >
                  <FaLinkedin size={30} />
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Footer;
