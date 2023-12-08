 import { Github, GithubIcon, Twitter, X } from "lucide-react";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Card from "../components/Card";
const entityCard = [
    {
        chain: "Ethereum",
        price: 13000,
        active: 3,
        milestones: 23,
           github: "/",
        x: "/",
        profile:"/"
        
    },
     {
        chain: "SUI",
        price: 8000,
        active: 1,
         milestones: 6,
           github: "/",
        x: "/",
        profile:"/"
        
    },
      {
        chain: "Solana",
        price: 28000,
        active: 3,
          milestones: 23,
           github: "/",
        x: "/",
        profile:"/"
        
    },
       {
        chain: "Aptos",
        price: 32000,
        active: 19,
           milestones: 24,
           github: "/",
        x: "/",
        profile:"/"
        
    }
  
]

const contCard = [
    {
        name: " Kaushik",
        role: "full-stack dev",
          price: 13000,
        commits: 100,
        contributions: 50,
        milestones: 2,
        github: "/",
        x: "/",
        profile:"/"
    }
    ,
       {
        name: " Karthick",
           role: "back-end dev",
          price: 13000,
        commits: 70,
        contributions: 30,
        milestones: 3,
        github: "/",
        x: "/",
        profile:"/"
    }
    ,
          {
        name: " Brien Austin",
              role: "front-end dev",
          price: 13000,
        commits: 100,
        contributions: 50,
        milestones: 2,
        github: "/",
        x: "/",
        profile:"/"
    }
]

export default function Contributor() {
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center mt-[40px]">
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
            </div>
           
            <h1 className="font-semibold mx-32 mt-12 text-[30px]  text-white">Foundation </h1>
            <div className="flex justify-center items-center w-[1280px] gap-[40px] mx-auto mt-[20px]">
                
                
                {
                    entityCard.map((data) => (
                        <div className="border-2 border-slate-200 w-[300px] h-[300px] rounded-lg bg-gray-500 flex flex-col ">
                            <div className="mt-[40px] mx-[20px] flex flex-col gap-[10px]">
                            <h1 className=" text-white text-[20px] font-thin"><span className="font-semibold">${data.price}</span> locked</h1>
                                <h1 className="text-[20px] text-white font-thin whitespace-nowrap"><span className="font-semibold text-[30px]">{data.chain} </span>  Foundation</h1>
                                <h1 className="text-[20px] text-white font-thin"><span className="font-semibold">
                                    {data.active}</span>  active projects</h1>
                                <h1 className="text-[30px] text-white font-thin"> <span className="font-semibold">{data.milestones}</span> milestones <span className="text-[14px]">left</span></h1>
                                       <div className="flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-2 text-white mt-6">
                                        <Link href={`${data.github}`}>
                                            <Github />
                                        </Link>
                                        <Link href={`${data.x}`}>
                                            <Twitter />
                                        </Link>
                                    </div> <Link className="mt-6 underline text-white font-thin text-[20px]" href={`${data.profile}`}>view profile</Link>

                                </div>
                              
                            </div> 
                       

                </div>
                
                    ))
               }
            </div>
             <h1 className="font-semibold mx-32 mt-12 text-[30px]  text-white">Indviduals <span className="font-thin">initiated</span> </h1>

                <div className="flex justify-center items-center w-[1280px] gap-[40px] mx-auto mt-[20px]">
                
                {
                    contCard.map((data) => (
                        <div className="border-2 border-slate-200 w-[400px] h-[300px] rounded-lg bg-gray-500 flex flex-col mb-5 ">
                            <div className="mt-[40px] mx-[40px] flex flex-col gap-[10px]">
                            <h1 className=" text-white text-[20px]">${data.price} locked</h1>
                                <h1 className="text-[20px] text-white font-thin"><span className="font-semibold text-[30px]">{data.name} </span>  {data.role}</h1>
                                <h1 className="text-[20px] text-white font-thin"> {data.contributions} active projects</h1>
                                <h1 className="text-[30px] text-white font-thin"> <span className="font-semibold">{data.milestones}</span> milestones <span className="text-[14px]">left</span></h1>
                                       <div className="flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-2 text-white mt-6">
                                        <Link href={`${data.github}`}>
                                            <Github />
                                        </Link>
                                        <Link href={`${data.x}`}>
                                            <Twitter />
                                        </Link>
                                    </div> <Link className="mt-6 underline text-white font-thin text-[20px]" href={`${data.profile}`}>view profile</Link>

                                </div>
                              
                            </div> 
                       

                </div>
                
                    ))
               }
            </div>
          
        </>
    )
}
