"use client"
import { GithubIcon, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CardData {
  id: string;
  title: string;
  description: string;
  entity: string;
  github: string;
  milestone: number;
  share: number;
  share_percents: number;
  time: number;
  x: string;
  category: String;
  price: number;
}

export default function Card() {
  const [cardData, setCardData] = useState<CardData[]>([]); 

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch('https://652f27bf0b8d8ddac0b23da8.mockapi.io/codek_project_card');
        if (response.ok) {
          const data: CardData[] = await response.json();
          setCardData(data);
          console.log(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <>

      
      <div className="flex flex-wrap justify-center gap-10 items-center mt-12">
        {cardData.map((data) => (
          <div className="w-[1280px] border border-slate-100 rounded-xl bg-gray-500  h-[300px] ">
            <div className="flex justify-between ">
              <div className="mt-[40px] mx-[40px] text-[20px] font-semibold text-white">
                <div className="flex flex-col gap-[20px]">
                  <h1>Ethereum Foundation</h1>
                  <h1 className="text-[30px] font-thin "><span className="font-semibold">Wandr</span> Mobile App</h1>
                  <h1 className="font-thin">Earn while travelling, completing each milestone will let you unlock rewards on the way.</h1>
                 <div className="flex flex-col gap-[10px]"><Link href={"https://github.com/blockbasedev/Rhino"} className="flex  items-center gap-1">
                    <GithubIcon size={20} />
                    <h1 className="underline font-thin">https://github.com/blockbasedev/Rhino</h1>

                  </Link>
                     <Link href={"https://github.com/blockbasedev/Rhino"} className="flex  items-center gap-1">
                    <Twitter size={20} />
                    <h1 className="underline font-thin">https://github.com/blockbasedev/Rhino</h1>

                    </Link>
                    </div> 

              </div>
             
         

              </div>
                 <div className="mt-[40px] mr-[40px] text-right text-white" >
                  <div className="flex flex-col gap-[10px]" >
                    <h1 className="text-[30px] font-thin"> <span className="font-semibold">1</span> year</h1>
                      <h1 className="text-[30px] font-thin"> <span className="font-semibold">$5000</span> locked</h1>
                </div>
                <div className="flex flex-col mt-[20px]">
                   <h1 className="text-[30px] font-thin"> <span className="font-semibold">10</span> milestone</h1>
                      <h1 className="text-[30px] font-thin"> <span className="font-semibold">0.5% ($25) </span> per share</h1>

                </div>

              </div>
              </div>

          
     </div>
            
  
        ))}
      </div>
    </>
  );
}
