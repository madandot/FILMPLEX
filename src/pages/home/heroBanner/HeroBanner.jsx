import "../../../App.css";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import React, { useState, useEffect } from "react";
import Img from "../../../components/lazyLoadImage/Img";
import { useNavigate, useSearchParams } from "react-router-dom";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
   const [background, setBackground] = useState("");
   const [query, setQuery] = useState("");
   const navigate = useNavigate();
   const { data, loading } = useFetch("/movie/upcoming");
   const { url } = useSelector((state) => state.home);
   useEffect(() => {
      const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
      setBackground(bg);
   }, [data]);
   const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
         navigate(`/search/${query}`);
      }
   };
   return (
      <div className=' w-full h-[450px] bg-[#04152d] flex items-center relative md:h-[700px] '>
         <div
            className='w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden
         '
         >
            {!loading && <Img src={background} className='w-full h-full object-cover object-center' />}
         </div>
         <div className='opacity-layer'></div>
         <ContentWrapper>
            <div
               className='flex flex-col items-center text-white text-center relative
             max-w-[800px] mx-auto'
            >
               <span className=' text-5xl  font-bold mb-2 md:mb-0 md:text-7xl'>Welcome.</span>
               <span className='text-[18px] mb-10 font-medium md:text-[24px]'>
                  Tons of movies, TV shows and people to discover. Explore now.
               </span>
               <div className='searchInput text-black flex items-center w-full'>
                  <input
                     className='w-[calc(100%-100px)] h-[50px] bg-white outline-none rounded-l-full py-0
                      px-[15px] text-sm md:w-[calc(100%-150px)] md:h-[60px] md:text-lg md:px-[30px] md:py-0
                     '
                     type='text'
                     placeholder='Search for a movie or tv show....'
                     onChange={(e) => setQuery(e.target.value)}
                     onKeyUp={searchQueryHandler}
                  />
                  <button
                     className='w-[100px] md:w-[150px] md:h-[60px] md:text-lg h-[50px] bg-gradient-to-r from-[#edaf49] via-[#f66618]
                         to-[#f00d27] text-white outline-none rounded-r-full text-base cursor-pointer '
                  >
                     Search
                  </button>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default HeroBanner;
