import "../../App.css";
import { SlMenu } from "react-icons/sl";
import Logo from "../../assets/LOGO2.png";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineSearch } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
const Header = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [query, setQuery] = useState("");
   const [show, setShow] = useState("top");
   const [showSearch, setShowSearch] = useState("");
   const [lastScrollY, setLastScrollY] = useState(0);
   const [mobileMenu, setMobileMenu] = useState(false);
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);
   const controlNavbar = () => {
      if (window.scrollY > 200) {
         if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("hidden");
         } else {
            setShow("show");
         }
         setLastScrollY(window.scrollY);
      } else {
         setShow("top");
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
         window.removeEventListener("scroll", controlNavbar);
      };
   }, [lastScrollY]);

   const openSearch = () => {
      setMobileMenu(false);
      setShowSearch(true);
   };
   const openMobileMenu = () => {
      setMobileMenu(true);
      setShowSearch(false);
   };

   const navigationHandler = (type) => {
      if (type === "movie") {
         navigate("/explore/movie");
      } else {
         navigate("/explore/tv");
      }
      setMobileMenu(false);
   };
   const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
         navigate(`/search/${query}`);
         setTimeout(() => {
            setShowSearch(false);
         }, 1000);
      }
   };
   return (
      <header
         className={`fixed translate-y-0 w-full h-16 z-[2]  flex items-center transition-all ease-in-out duration-500 ${show}
           ${mobileMenu ? "mobileView" : ""} `}
      >
         <ContentWrapper>
            <div className='flex justify-between items-center'>
               <div className=' cursor-pointer' onClick={() => navigate("/")}>
                  <img src={Logo} alt='logo' className=' md:h-12 h-10' />
               </div>
               <div>
                  <ul className='md:flex hidden items-center gap-x-8'>
                     <li onClick={() => navigationHandler("movie")} className='text-white font-medium cursor-pointer hover:text-pink-600'>
                        Movies
                     </li>
                     <li onClick={() => navigationHandler("tv")} className='text-white font-medium cursor-pointer hover:text-pink-600'>
                        TV Shows
                     </li>
                     <li className='text-white font-medium cursor-pointer hover:text-red-600'>
                        <HiOutlineSearch onClick={openSearch} size={23} />
                     </li>
                  </ul>
               </div>
               <div className='md:hidden flex gap-x-8 items-center text-white text-xl'>
                  <HiOutlineSearch onClick={openSearch} size={22} />
                  {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
                  {mobileMenu && (
                     <div className={`absolute top-[60px] left-0 w-full h-full   ${mobileMenu ? "translate-y-0" : "-translate-y-[95px]"} `}>
                        <div className=' rounded flex flex-col gap-y-4 py-4 px-8 text-2xl'>
                           <div onClick={() => navigationHandler("movie")}>Movies</div>
                           <div onClick={() => navigationHandler("tv")}>TV Shows</div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </ContentWrapper>
         {showSearch && (
            <div className='searchBar w-full h-[60px] absolute top-[60px]'>
               <ContentWrapper>
                  <div className='searchInput flex items-center h-10 mt-8 w-full'>
                     <input
                        type='text'
                        className='w-full h-[50px] bg-white outline-none rounded-l-full pl-8 md:h-[60px] text-[20px]'
                        placeholder='Search for a movie or tv show....'
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                     />
                     <VscChromeClose
                        onClick={() => setShowSearch(false)}
                        className='w-[100px] md:w-[150px] md:h-[60px] md:text-lg h-[50px] bg-gradient-to-r from-[#edaf49] via-[#f66618]
                         to-[#f00d27] text-white outline-none rounded-r-full text-base cursor-pointer'
                     />
                  </div>
               </ContentWrapper>
            </div>
         )}
      </header>
   );
};

export default Header;
