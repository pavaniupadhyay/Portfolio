
import Hero from "../components/Hero";

import MoveingCards from "@/components/MoveingCards";
import RecentProject from "@/components/RecentProject";
import Experiance from "@/components/Experiance";
import About from "@/components/About"
import Contect from "@/components/Contect";


export default function Home() {
  return (
    <main >
      <div >
      
      <Hero/>
      <MoveingCards/>
      <RecentProject/>
      <Experiance/>
      <About/>
      <Contect/>
      </div> 
      </main>
  );
} 
