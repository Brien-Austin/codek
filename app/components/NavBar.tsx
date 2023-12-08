"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';



export default function NavBar() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
 

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const isTabSelected = (tab: string) => (selectedTab === tab ? 'font-thin' : '');

  return (
    <>
      <div className="mx-auto w-[1280px] mt-10 flex justify-between items-center">
        <div className="flex justify-center items-center gap-10">
        <Link href={"/"} className="text-[40px] font-bold text-white flex justify-center items-center gap-1">
          <Image src={"/codek.png"} width={40} height={40} alt="codek"/>
          Codek</Link>
          <div className="ml-16 flex justify-center items-center gap-[20px]">
            <Link href={ "/"} className={`text-white  text-[30px] ${isTabSelected('Projects')}`} onClick={() => handleTabClick('Projects')}>
              Projects
            </Link>
            <Link href={ "/contributor"}  className={`text-white text-[30px] ${isTabSelected('Contributor')}`} onClick={() => handleTabClick('Contributor')}>
              Contributor
            </Link>
            <Link  href={ "/entity"} className={`text-white text-[30px] ${isTabSelected('Entity')}`} onClick={() => handleTabClick('Entity')}>
              Entity
            </Link>
          </div>
        </div>

        <Link href={"/"}  className='text-white border border-gradient-to-tr from-slate-200 to-[#252525] h-[60px] w-[240px] flex justify-center items-center text-xl  bg-gray-500' style={{ borderRadius: '20px' }} passHref>
        
            Connect
      
        </Link>
      </div>
    </>
  );
}
