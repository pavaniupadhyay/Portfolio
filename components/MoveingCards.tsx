import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import html from "@/public/html.jpg";
import css from "@/public/css.png";
import js from "@/public/javascript.png";
import express from "@/public/express.png";
import mongodb from "@/public/mongodb.jpeg";
import postgresql from "@/public/postgres.jpg";
import react from "@/public/react.png";
import typescript from "@/public/typescript.jpeg";
import git from "@/public/R.jpeg";
import aws from "@/public/AWS.jpeg";
import nodejs from "@/public/nodejs.jpeg";
import docker from "@/public/docker.png";

const MovingCards = () => {
  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="mt-[-300px]"> {/* Negative top margin to move components higher */}
    
      
        
   
        <InfiniteMovingCards
         
          items={[
            {
              quote: "html",
              name: " ",
              title: "",
              image: html.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "css",
              name: "",
              title: "",
              image: css.src,
              bgColor: "#ff58ea",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "js",
              name: "",
              title: "",
              image: js.src,
              bgColor: "#00af6f",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "nodejs",
              name: "",
              title: "",
              image: nodejs.src,
              bgColor: "#ff791f",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "express",
              name: "",
              title: "",
              image: express.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "mongo",
              name: "",
              title: "",
              image: mongodb.src,
              bgColor: "#ff58ea",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "react",
              name: "",
              title: "",
              image: react.src,
              bgColor: "#00af6f",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "typescript",
              name: "",
              title: "",
              image: typescript.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "postgres",
              name: "",
              title: "",
              image: postgresql.src,
              bgColor: "#ff791f",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "giy",
              name: "",
              title: "",
              image: git.src,
              bgColor: "#ff58ea",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "aws",
              name: "",
              title: "",
              image: aws.src,
              bgColor: "#00af6f",
              textColor: "#000000",
              imageClasses: ""
            },
            {
              quote: "docker",
              name: "",
              title: "",
              image: docker.src,
              bgColor: "#00a3ff",
              textColor: "#000000",
              imageClasses: ""
            },
          ]}
        />
        
      </div>
      <div className='py-20'>
        <h1 className='heading'>
          A small section of{''}
          <span className='text-blue-400 flex justify-center'>recent projects</span>
        </h1>
    </div>
     </div>
  );
};

export default MovingCards;
