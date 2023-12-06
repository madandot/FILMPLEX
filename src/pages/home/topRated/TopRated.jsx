import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
   const [endpoint, setEndPoint] = useState("movie");
   const { data, loading } = useFetch(`/${endpoint}/top_rated`);
   const onTabChange = (tab) => {
      setEndPoint(tab === "Movies" ? "movie" : "tv");
   };
   return (
      <div className=' relative mb-16'>
         <ContentWrapper>
            <div className='flex items-center justify-between gap-2 '>
               <span className='text-[20px] text-white font-normal'>Top Rated</span>
               <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </div>
         </ContentWrapper>
         <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
      </div>
   );
};

export default TopRated;
