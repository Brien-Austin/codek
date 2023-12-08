import { Github, Twitter, X } from "lucide-react";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Card from "../components/Card";
const contCard = [
    {
        name: " Kaushik",
        role : "full-stack dev",
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
        role : "back-end dev",
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
        role : "front-end dev",
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
            <h1 className="font-semibold mx-32 mt-12 text-[30px]  text-white">Top Contributors <span className="font-thin">this week</span> </h1>
            <div className="flex justify-center items-center w-[1280px] gap-[40px] mx-auto mt-[20px]">
                
                {
                    contCard.map((data) => (
                        <div className="border-2 border-slate-200 w-[400px] h-[300px] rounded-lg bg-gray-500 flex flex-col ">
                            <div className="mt-[40px] mx-[40px] flex flex-col gap-[10px]">
                            <h1 className=" text-white text-[20px]">{data.commits}+ commits</h1>
                                <h1 className="text-[20px] text-white font-thin"><span className="font-semibold text-[30px]">{data.name} </span>  {data.role}</h1>
                                <h1 className="text-[20px] text-white font-thin">Actively contributing {data.contributions} projects</h1>
                                <h1 className="text-[30px] text-white font-thin"> <span className="font-semibold">{data.milestones}</span> milestones</h1>
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
            <Card/>
        </>
    )
}