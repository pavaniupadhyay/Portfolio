import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import html1 from "@/public/html1.png";
import css3 from "@/public/css3.png";
import js1 from "@/public/javas1.png";
import express from "@/public/express-ii.png";
import mongodb from "@/public/mongodb1.png";
import postgresql from "@/public/postgres1.png";
import react from "@/public/react (1).png";
import typescript from "@/public/typescript.png";
import git from "@/public/git.png";
import aws from "@/public/AWS1.png";
import nodejs from "@/public/nodejs1.png";
import docker from "@/public/docker1.png";
import { projects } from '@/data';
import { FaLocationArrow } from 'react-icons/fa';
import { PinContainer } from './ui/3D-pin';
import { Bungee, Caveat, Courgette,  Lilita_One,  Nerko_One, Teko } from "@next/font/google";
import { Roboto } from "@next/font/google";
import { Lato } from 'next/font/google';
import { Indie_Flower } from '@next/font/google';
import { Spicy_Rice } from 'next/font/google';
import { Noto_Color_Emoji } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: "400",
});

const spicy_Rice = Spicy_Rice({
  subsets: ['latin'],
  weight: "400",
});
const indie_Flower = Indie_Flower({
  subsets: ['latin'],
  weight: "400",
});
const nerko_one = Nerko_One({
  subsets: ['latin'],
  weight: "400",
});
const lato = Lato({ subsets: ["latin"], weight: "400" });
const bungee = Bungee({ subsets: ['latin'], weight: "400" });
const teko = Teko({ subsets: ['latin'], weight: "400" });
const caveat = Caveat({ subsets: ['latin'], weight: "400" });
const lilita_one = Lilita_One({ subsets: ['latin'], weight: "400" });
const courgette = Courgette({ subsets: ['latin'], weight: "400" });

const MovingCards = () => {
  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className={spicy_Rice.className}>
        <InfiniteMovingCards
          items={[
            {
              quote: "HTML",
              name: "",
              title: "",
              image: html1.src,
              bgColor: "#F97316",
              textColor: "#FFFFFF",
              imageSize: "h-20 w-20",
              imageMargin: "mr-6",
            },
            {
              quote: "CSS",
              name: "",
              title: "",
              image: css3.src,
              bgColor: "#60A5FA",
              textColor: "#FFFFFF",
              imageSize: "h-16 w-16",
              imageMargin: "mr-8",
            },
            {
              quote: "JavaScript",
              name: "",
              title: "",
              image: js1.src,
              bgColor: "#FACC15",
              textColor: "#525d5d",
              imageSize: "h-26 w-24",
              imageMargin: "mr-8 ml-3",
            },
            {
              quote: "NODEJS",
              name: "",
              title: "",
              image: nodejs.src,
              bgColor: "#ff791f",
              textColor: "#000000",
              imageClasses: "h-16 w-16 flex justify-center",
            },
            {
              quote: "EXPRESS",
              name: "",
              title: "",
              image: express.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: "h-16 w-16 flex justify-center ml-3",
            },
            {
              quote: "MONGODB",
              name: "",
              title: "",
              image: mongodb.src,
              bgColor: "#00af6f",
              textColor: "#000000",
              imageClasses: "h-16 w-16 flex justify-center",
            },
            {
              quote: "REACT",
              name: "",
              title: "",
              image: react.src,
              bgColor: " #ff58ea",
              textColor: "#000000",
              imageClasses: "h-16 w-16 flex justify-center",
            },
            {
              quote: "TYPESCRIPT",
              name: "",
              title: "",
              image: typescript.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: "h-16 w-16 flex justify-center",
            },
            {
              quote: "POSTGRESQL",
              name: "",
              title: "",
              image: postgresql.src,
              bgColor: "#ff791f",
              textColor: "#000000",
              imageClasses: "h-16 w-16 flex justify-center ml-2",
            },
            {
              quote: "GIT",
              name: "",
              title: "",
              image: git.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: "h-16 w-16 flex justify-center",
            },
            {
              quote: "DOCKER",
              name: "",
              title: "",
              image: docker.src,
              bgColor: " #ff58ea",
              textColor: "#000000",
              imageClasses: "h-16 w-16 flex justify-center",
            },
            {
              quote: "AWS",
              name: "",
              title: "",
              image: aws.src,
              bgColor: "#00af6f",
              textColor: "#000000",
              imageSize: "h-16 w-16",
              imageMargin: "ml-10",
            },
          ]}
        />
      </div>

      <div>
        <div className={lilita_one.className}>
        <div className="text-left ml-100 p-10 mt-100">
            <h1 className="text-blue-100 text-6xl md:text-7xl tracking-wide leading-tight ">
              Recent <span className="text-blue-400">projects</span>
            </h1>
          </div>
          </div>
          
       
        <div className={roboto.className}>
          <div className="flex flex-wrap justify-center gap-20 gap-y-1 mt-5 mb-50">
            {projects.map((item) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}
              >
                <PinContainer title="" href={item.link} className="bg-black-200 rounded-xl">
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-5">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-gray-500"
                    >
                      <img src="" alt="" />
                    </div>
                    <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base pl-3 line-clamp-1">
                    {item.title}
                  </h1>
                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "gray",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center pl-2 pb-2">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black-300 lg:w-10 lg:h-10 h-7 w-7 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingCards;
