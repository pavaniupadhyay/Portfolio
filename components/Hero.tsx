"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { GlareCard } from "./ui/glare-card";
import Image from 'next/image';
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { Nerko_One } from "@next/font/google";
import { Bungee } from "@next/font/google";
import linkdin from "@/public/ld.png";
import github from "@/public/githublogo.webp";
import gmail from "@/public/gmail1.png";
import X from "@/public/x1.png";
import img4 from "@/public/img4.png"; // Import the img4 image
 // Import the Contact component

const people = [
  { id: 1, name: "linkdin", designation: "Professional Network", image: linkdin.src, color: "#f1f1f1", link: "https://www.linkedin.com/in/pavani-upadhyay-749ab926b/" },
  { id: 2, name: "github", designation: "Code Repository", image: github.src, color: "#f1f1f1", link: "https://github.com/pavaniupadhyay" },
  { id: 3, name: "gmail", designation: "Email Service", image: gmail.src, color: "#f1f1f1", link: "mailto:pavaniupadhyay@gmail.com" },
  { id: 4, name: "Twitter", designation: "Social Media", image: X.src, color: "#f1f1f1", link: "https://x.com/PavaniU81150" },
];

const Nerko_one = Nerko_One({ subsets: ['latin'], weight: "400" });
const bungee = Bungee({ subsets: ['latin'], weight: "400" });

const Hero = () => {
  const router = useRouter(); // Initialize router for navigation

  const handleContactClick = () => {
    router.push('/contact'); // Navigate to the contact page
  };

  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mr-500 mt-65 mb-100">
        <div className={Nerko_one.className}>
          <GlareCard className="mr-10  flex flex-row  items-center">
          <Image src={img4} alt="Profile" className="h-90" />
            <div className="ml-5 text-white">
              <h1 className="flex justify-end items-end mr-150 text-8xl mb-4 ">Hyy!! There</h1>
              <h1 className="text-8xl ml-320 mt-30">It&#39;s Pavani</h1>
              <p className="text-6xl ml-150 mb-50 mt-50">A Full Stack Developer</p>
              <button className="button-55 mb-100 ml-350" role="button" onClick={handleContactClick}>Contact Me</button>
            </div>
          </GlareCard>
        </div>
        <div className="absolute bottom-11 right-3 flex flex-col items-center space-y-1">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
