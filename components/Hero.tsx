import React from 'react';
import { GlareCard } from "./ui/glare-card";
import img4 from "../public/img4.png";


import { Nerko_One} from "@next/font/google"
import { Bungee } from "@next/font/google"
const nerko_one = Nerko_One({
  subsets: ['latin'],
  weight: "400",
});
const bungee  = Bungee({
  subsets: ['latin'],
  weight: "400",
});

const Hero = () => {
  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="mr-650 mt-100">
      <div className=" grid grid-cols-4 gap-4 p-3">
     <a href="#" className="text-white font-extrabold hover:text-gray-400"></a>
  <a href="#" className="text-white font-extrabold hover:text-gray-400"></a>
  <a href="#" className="text-white font-extrabold hover:text-gray-400"></a>
  <a href="#" className="text-blue-500 font-extrabold hover:text-pink-500"></a>
</div>
        
      <div className={nerko_one.className}>
        <GlareCard className="mr-550 flex flex-row items-center  ">
          <img src={img4.src} alt="image" className="h-90" />
          <div className="ml-5 text-white">
          <h1 className="flex justify-end items-end mr-100 text-7xl mb-4">Hyy!! There</h1>
          <h1 className="text-7xl   ml-220 mt-30">It's Pavani</h1>
          <p className="text-5xl mt-2  ml-150 mb-50 mt-30 "> A Full Stack Devloper</p>
        <button className="button-55 mb-200 ml-350 " role="button">Contect Me</button>
        

        </div>
        </GlareCard>
        </div>
      </div>
    </div>

    
  );
}

export default Hero;
