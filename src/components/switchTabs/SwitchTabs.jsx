import React, { useState } from "react";
import "../../App.css";

const SwitchTabs = ({ data, onTabChange }) => {
   const [selectedTab, setSelectedTab] = useState(0);
   const [left, setLeft] = useState(0);
   const activeTab = (tab, index) => {
      setLeft(index * 100);
      setTimeout(() => {
         setSelectedTab(index);
      }, 300);
      onTabChange(tab, index);
   };
   return (
      <div className='h-[34px] bg-white rounded-3xl p-[2px]'>
         <div className='h-[30px] relative flex items-center'>
            {data.map((tab, index) => (
               <span
                  onClick={() => activeTab(tab, index)}
                  key={index}
                  className={`tabItem h-full flex items-center justify-center w-[100px] text-[#04125d] text-base relative z-[1] cursor-pointer  ${
                     selectedTab === index ? "active" : ""
                  } `}
               >
                  {tab}
               </span>
            ))}
            <span
               className='movingBg bg-gradient-to-r from-[#edaf49] via-[#f66618]
                         to-[#f00d27] rounded-[14px] h-[30px] w-[100px] absolute left-0'
               style={{ left }}
            />
         </div>
      </div>
   );
};

export default SwitchTabs;
