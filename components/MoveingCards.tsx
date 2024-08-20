import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import html1 from "@/public/html1.png";
import css2 from "@/public/css2.png";
import js1 from "@/public/javascript1.png";
import express from "@/public/express1.png";
import mongodb from "@/public/mongodb1.png";
import postgresql from "@/public/postgres1.png";
import react from "@/public/react1.png";
import typescript from "@/public/typescript1.png";
import git from "@/public/git1.png";
import aws from "@/public/AWS1.png";
import nodejs from "@/public/nodejs1.png";
import docker from "@/public/docker1.png";
import { projects } from '@/data';
import { title } from 'process';
import { FaLocationArrow } from 'react-icons/fa';
import { PinContainer } from './ui/3D-pin';


const MovingCards = () => {
  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="mt-900"> {/* Negative top margin to move components higher */}
        <InfiniteMovingCards
          items={[
            {
              quote: "html",
              name: " ",
              title: "",
              image: html1.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-10 h-10 mt-10"
            },
            {
              quote: "css",
              name: "",
              title: "",
              image: css2.src,
              bgColor: "#ff58ea",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "js",
              name: "",
              title: "",
              image: js1.src,
              bgColor: "#00af6f",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "nodejs",
              name: "",
              title: "",
              image: nodejs.src,
              bgColor: "#ff791f",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "express",
              name: "",
              title: "",
              image: express.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "mongo",
              name: "",
              title: "",
              image: mongodb.src,
              bgColor: "#ff58ea",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "react",
              name: "",
              title: "",
              image: react.src,
              bgColor: "#00af6f",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "typescript",
              name: "",
              title: "",
              image: typescript.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "postgres",
              name: "",
              title: "",
              image: postgresql.src,
              bgColor: "#ff791f",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "giy",
              name: "",
              title: "",
              image: git.src,
              bgColor: "#ff58ea",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "aws",
              name: "",
              title: "",
              image: aws.src,
              bgColor: "#00af6f",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
            {
              quote: "docker",
              name: "",
              title: "",
              image: docker.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: "rounded-lg shadow-md w-20 h-20"
            },
          ]}
        />
      </div>

      <div className="py-20 ">
      <h1 className=" flex justify-end mr-500 text-6xl font-bold italic text-white">Recent projects </h1>
</div>

<div className="flex flex-wrap justify-center gap-20 gap-y-1 mt-20 ">
  {projects.map((item) => (
    <div
      className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
      key={item.id}
    >
      <PinContainer title="" href="">
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.png" alt="bgimg" />
          </div>
          <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
        </div>
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
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
          <div className="flex items-center">
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
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
  );
};

export default MovingCards;
