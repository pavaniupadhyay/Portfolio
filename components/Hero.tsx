"use client";
import React from 'react';
import { GlareCard } from "./ui/glare-card";
import img4 from "../public/img4.png";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { Nerko_One } from "@next/font/google";
import { Bungee } from "@next/font/google";
import { color } from 'framer-motion';
import linkdin from "@/public/ld.png";
import github from "@/public/githublogo.webp";
import gmail from "@/public/gmail1.png";
import X from "@/public/x1.png";
import { Lato } from 'next/font/google';
import Experiance from './Experiance';





const people = [
  { 
    id: 1, 
    name: "linkdin", 
    designation: "", 
    image: linkdin.src, 
    color: "#f1f1f1", 
    link: "https://www.linkedin.com/in/pavani-upadhyay-749ab926b/"
  },
  { 
    id: 2, 
    name: "github", 
    designation: "", 
    image: github.src, 
    color: "#f1f1f1", 
    link: "https://github.com/pavaniupadhyay" 
  },
  { 
    id: 3, 
    name: "gmail", 
    designation: "", 
    image: gmail.src, 
    color: "#f1f1f1", 
    link: "pavaniupadhyay@gmail.com"
  },
  { 
    id: 4, 
    name: "Twitter", 
    designation: "", 
    image: X.src, 
    color: "#f1f1f1", 
    link: "https://x.com/PavaniU81150" 
  },
];


const Nerko_one = Nerko_One({ subsets: ['latin'], weight: "400" });
const bungee = Bungee({ subsets: ['latin'], weight: "400" });
 
const contectBtn=()=>{
  <Experiance/>
}

const Hero = () => {
  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="mr-500 mt-65 mb-100">
       
        
        <div className={Nerko_one.className}>
          <GlareCard className="mr-10 flex flex-row items-center">
            <img src={img4.src} alt="image" className="h-90" />
            <div className="ml-5 text-white">
              <h1 className="flex justify-end items-end mr-150 text-8xl mb-4">Hyy!! There</h1>
              <h1 className="text-8xl ml-320 mt-30">It's Pavani</h1>
              <p className="text-6xl  ml-150 mb-50 mt-50"> A Full Stack Developer</p>
              <button className="button-55 mb-100 ml-350" role="button" onClick={contectBtn}>Contact Me</button>
            </div>
          </GlareCard>
        </div>

        {/* Place the circles in the bottom-right corner */}
        <div className="absolute bottom-11 right-3 f  lex flex-col items-center space-y-1">
          <AnimatedTooltip items={people}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
