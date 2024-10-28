"use client";
import React from 'react';
import { GlareCard } from "./ui/glare-card";
import img4 from "../public/img4.png";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { Nerko_One } from "@next/font/google";
import { Bungee } from "@next/font/google";
import { color } from 'framer-motion';



const people = [
  { id: 1,name:"",designation:"", image: "" ,color:"#00a3ff"},
  { id: 2, name:"",designation:"", image: "" ,color:"#000"},
  { id: 3,name:"", designation:"", image: "",color:"" },
  { id: 4, name:"",designation:"", image: "" ,color:""},


];

const nerko_one = Nerko_One({ subsets: ['latin'], weight: "400" });
const bungee = Bungee({ subsets: ['latin'], weight: "400" });

const Hero = () => {
  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="mr-500 mt-65 mb-100">
        <div className="grid grid-cols-4 gap-4 p-3">
          <a href="#" className="text-white font-extrabold hover:text-gray-400"></a>
          <a href="#" className="text-white font-extrabold hover:text-gray-400"></a>
          <a href="#" className="text-white font-extrabold hover:text-gray-400"></a>
          <a href="#" className="text-blue-500 font-extrabold hover:text-pink-500"></a>
        </div>
        
        <div className={nerko_one.className}>
          <GlareCard className="mr-10 flex flex-row items-center">
            <img src={img4.src} alt="image" className="h-90" />
            <div className="ml-5 text-white">
              <h1 className="flex justify-end items-end mr-150 text-8xl mb-4">Hyy!! There</h1>
              <h1 className="text-8xl ml-320 mt-30">It's Pavani</h1>
              <p className="text-6xl  ml-150 mb-50 mt-50"> A Full Stack Developer</p>
              <button className="button-55 mb-100 ml-350" role="button">Contact Me</button>
            </div>
          </GlareCard>
        </div>

        {/* Place the circles in the bottom-right corner */}
        <div className="absolute bottom-11 right-3 flex flex-col items-center space-y-1">
          <AnimatedTooltip items={people}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
