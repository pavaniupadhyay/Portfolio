import React from 'react'
import{Creepster } from "@next/font/google"
const creepster = Creepster({
  subsets: ['latin'],
  weight: "400",
});
const Contect = () => {
  return (
    <div className="h-screen w-full dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <p className={creepster.className}>
          <span className="text-3xl text-orange-300">Contact</span> us
        </p>
        </div>
      </div>
  )
}

export default Contect