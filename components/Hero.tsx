import React from 'react'
import config from '@/tailwind.config';
import { GlareCard } from "./ui/glare-card";
import img4 from "../public/img4.png";

const Hero = () => {

  return (
   
    <div className="h-screen w-full  dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center ">
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ">

      </div>
      
      <div className=" mr-900 mt-100"> 
    <GlareCard className="mr-550">
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke=""
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
    <div>
      <h1 className=" flex justify-end mr-100 text-3xl font-bold text-white">Welcome to our website</h1>
    </div>
   <img src={img4.src} alt="image " className="h-90" />    

   
   
  </GlareCard>
  
    </div>
    <div>
      </div>
   </div>

  )
}   

export default Hero