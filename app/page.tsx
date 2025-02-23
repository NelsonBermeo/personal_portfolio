import Image from "next/image";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { ExpandableCardDemo } from "@/components/ContentCreators";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { LayoutGridDemo } from "@/components/Socials";

import Courses from "@/components/Courses";

import { FaHome } from "react-icons/fa";





export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        
        <Hero />
        {/* <AboutMe />
        
        <Grid />
        <Experience /> */}
        {/* <RecentProjects /> */}
        
        
        {/* <Skills />
        <Courses />
        <ExpandableCardDemo />
        <LayoutGridDemo /> */}
        {/* <TabsDemo /> */}
        {/* <Socials /> */}
        {/* <Clients /> 
        <Footer /> */}
      </div>
    </main>
  );
}
