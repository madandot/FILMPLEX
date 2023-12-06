import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
   const [endpoint, setEndPoint] = useState("day");
   const { data, loading } = useFetch(`/trending/all/${endpoint}`);
   const onTabChange = (tab) => {
      setEndPoint(tab === "Day" ? "day" : "week");
   };
   return (
      <div className=' relative mb-16'>
         <ContentWrapper>
            <div className='flex items-center justify-between gap-2 '>
               <span className='text-[20px] text-white font-normal'>Trending</span>
               <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </div>
         </ContentWrapper>
         <Carousel data={data?.results} loading={loading} />
      </div>
   );
};

export default Trending;
