import { Main } from "next/document";
import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import MoveingCards from "@/components/MoveingCards";
import RecentProject from "@/components/RecentProject";
import Experiance from "@/components/Experiance";




export default function Home() {
  return (
    <main >
      <div >
      
      <Hero/>
      <MoveingCards/>
      <RecentProject/>
      <Experiance/>
      </div> 
      </main>
  );
} 
