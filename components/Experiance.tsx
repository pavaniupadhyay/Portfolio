/* Import statements */
import React from 'react';
import { Timeline } from './ui/timeline';
import { Bungee, Caveat, Courgette, Lato, Lilita_One, Nerko_One, Rubik_Vinyl, Teko } from "@next/font/google";
import { GlareCard2 } from './Glarecard-two';
import { ContainerScroll } from './ui/container-scroll-animation';
import { AnimatedModalDemo } from './ui/button';

const bungee = Bungee({ subsets: ['latin'], weight: "400" });

const lilita_one = Lilita_One({ subsets: ['latin'], weight: "400" });


const Experiance = () => {
  const data = [
    {
      title: "2023",
      content: (
        <div className={bungee.className}>
          <p className="text-yellow-200 text-4xl sm:text-5xl mb-4 sm:mb-8">Web Development Internship</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">2023</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">Responsibilities: Developed responsive and user-friendly websites using HTML, CSS, and JavaScript. Collaborated with a team to design and implement web applications, ensuring cross-browser compatibility and mobile responsiveness.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">Key Projects: Worked on various web projects that involved front-end development, improving user interface designs, and optimizing web performance.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">Technologies Used: Java, Kotlin, Android Studio, Firebase, RESTful APIs, and Git.</p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className={bungee.className}>
          <p className="text-yellow-200 text-sm sm:text-4xl mb-4 sm:mb-8">Android Development Internship</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">2024</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">Role: Intern - Android Developer</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">Responsibilities: Developed and maintained Android applications, focusing on enhancing user experience and performance. Collaborated with cross-functional teams to design, build, and deploy mobile apps.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">Key Projects: Contributed to the development of Android applications that involved implementing new features, debugging, and optimizing app performance.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-2xl font-normal mb-4 sm:mb-8">Technologies Used: Java, Kotlin, Android Studio, Firebase, RESTful APIs, and Git.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <div className="w-full mt-1 mb-10">
          <Timeline data={data} />
        </div>

        <div className="mt-16 sm:mt-60">
        <ContainerScroll titleComponent={<></>}>
      
    <div className="bo flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-start ml-10 mt-65">
      {/* Bo's face */}
      <div className="face relative mr-5">
        <div className="earL"></div>
        <div className="earR"></div>
        <div className="eyeL"></div>
        <div className="eyeR"></div>
        <div className="hairs"></div>
        <div className="nose"></div>
        <div className="mouth"></div>
        {/* Smile Left */}
        <div className="smileL">
          <svg xmlSpace="preserve" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            </filter>
            <path d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
            <path d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
            <path d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
          </svg>
        </div>
        {/* Smile Right */}
        <div className="smileR">
          <svg xmlSpace="preserve" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
            </filter>
            <path d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
            <path d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
            <path d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
          </svg>
        </div>
        {/* Snow */}
        <div className="snow">
          <div className="mountain-cap-1"></div>
          <div className="mountain-cap-2"></div>
          <div className="mountain-cap-3"></div>
          <div className="mountain-cap-4"></div>
        </div>
      </div>
      <div className={`${lilita_one.className} flex flex-col items-start ml-5 sm:ml-10 space-y-4 sm:space-y-8`}>
        <p className="text-pink-400 text-9xl ml-60 sm:text-x9l font-bold">Contact Me !!</p>
        <p className="text-white text-lg sm:text-3xl ml-60 font-serif sm:mb-130"> "I&rsquo;ll bring the tech</p>
        <p className="text-white text-lg sm:text-3xl ml-60 font-serif mb-4 "> You bring the vision&mdash;let&rsquo;s build your website!"</p>
        <div>
          <AnimatedModalDemo />
        </div>
      </div>
    </div>
  
</ContainerScroll>
  





        </div>
      </div>
    </div>
  );
};

export default Experiance;
