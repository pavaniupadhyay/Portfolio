import React from 'react'
import { Timeline } from './ui/timeline';
import{Nerko_One}from "@next/font/google"
const nerko_one = Nerko_One({
  subsets: ['latin'],
  weight: "400",
});

const Experiance = () => {
  const data = [
    {
      title: "2023",
      content: (
        <div className='font-'>
          <p className=" text-yellow-200 text-xs md:text-4xl  mb-8">
          Web Development Internship
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
          2023
         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
         Responsibilities : Developed responsive and user-friendly websites using HTML, CSS, and JavaScript. Collaborated with a team to design and implement web applications, ensuring cross-browser compatibility and mobile responsiveness.

         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
         Key Projects: Worked on various web projects that involved front-end development, improving user interface designs, and optimizing web performance.
         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
         Technologies Used: Java, Kotlin, Android Studio, Firebase, RESTful APIs, and Git.
         </p>
         
          <div className="grid grid-cols-2 gap-4">
           
            
           
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-yellow-200 text-xs md:text-4xl 
           mb-8">
          Android Development Internship
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
          2024
         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
         Role: Intern - Android Developer

         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
         Responsibilities: Developed and maintained Android applications, focusing on enhancing user experience and performance. Collaborated with cross-functional teams to design, build, and deploy mobile apps.
         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
         Key Projects: Contributed to the development of Android applications that involved implementing new features, debugging, and optimizing app performance.
         </p>
         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
         Technologies Used: Java, Kotlin, Android Studio, Firebase, RESTful APIs, and Git.
         </p>
         
          <div className="grid grid-cols-2 gap-4">
           
            
           
          </div>
        </div>
      ),
    },
   
    
  ];
  return (
    <div className="h-screen w-full  dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center ">
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ">

      </div>
      <div className="w-full mt-5 mb-1050">
      <Timeline data={data} />
    </div>
      </div>
  )
}

export default Experiance