"use client"
import { useState } from "react";

export default function Category() {
      const [selectedTab, setSelectedTab] = useState<string | null>(null);
 

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const isTabSelected = (tab: string) => (selectedTab === tab ? 'drop-shadow-2xl bg-gray-600' : '');
    return (
        <>
            <div className="w-[1280px] mt-12 flex justify-center items-center mx-auto gap-10 ">
                <div className={`w-[240px] h-[60px] flex justify-center items-center rounded-[20px] border border-slate-100 bg-gray-500 ${isTabSelected('Blockchain')}`} onClick={() => handleTabClick('Blockchain')}>
    <h1 className="py-2 rounded-lg text-white  text-xl text-center  " >Blockchain</h1>
                </div>
                   <div className={`w-[240px] h-[60px] flex justify-center items-center rounded-[20px] border border-slate-100 bg-gray-500 ${isTabSelected('Cloud')}`} onClick={() => handleTabClick('Cloud')}>
    <h1 className="py-2 rounded-lg text-white  text-xl text-center  " >Cloud</h1>
                </div>
                   <div className={`w-[240px] h-[60px] flex justify-center items-center rounded-[20px] border border-slate-100 bg-gray-500 ${isTabSelected('AI ML')}`} onClick={() => handleTabClick('AI ML')}>
    <h1 className="py-2 rounded-lg text-white  text-xl text-center  " >AI ML</h1>
                </div>
                   <div className={`w-[240px] h-[60px] flex justify-center items-center rounded-[20px] border border-slate-100 bg-gray-500 ${isTabSelected('Mobile App')}`} onClick={() => handleTabClick('Mobile App')}>
    <h1 className="py-2 rounded-lg text-white  text-xl text-center  " >Mobile App</h1>
                </div>
                   <div className={`w-[240px] h-[60px] flex justify-center items-center rounded-[20px] border border-slate-100 bg-gray-500 ${isTabSelected('Web App')}`} onClick={() => handleTabClick('Web App')}>
    <h1 className="py-2 rounded-lg text-white  text-xl text-center  " >Web App</h1>
                </div>
            
               
                

            </div>
        </>
    )
}