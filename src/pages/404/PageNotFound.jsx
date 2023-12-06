import React from "react";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
   return (
      <div className='pageNotFound h-[700px] pt-[200px]'>
         <ContentWrapper>
            <div className=' text-center text-[#232323] flex flex-col'>
               <span className='bigText text-7xl font-bold '>404</span>
               <span className='smallText text-4xl'>Page not found!</span>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default PageNotFound;
