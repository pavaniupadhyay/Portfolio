import React from 'react';
import { GlareCard } from "./ui/glare-card";
import img4 from "../public/img4.png";
import MovingCards from "@/components/MoveingCards"

const Hero = () => {
  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="mr-850 mt-65">
      
       

        <GlareCard className="mr-550 flex flex-row items-center">
          <img src={img4.src} alt="image" className="h-90" />
          <div className="ml-5 text-white">
            <h1 className="text-5xl  font-light">hiii</h1>
            <h1 className="text-5xl  font-serif pb-10 pt-10">hiii</h1>
            <h1 className="text-5xl  font-serif">hiiii</h1>
          </div>
        </GlareCard>
      </div>
    </div>
  );
}

export default Hero;
