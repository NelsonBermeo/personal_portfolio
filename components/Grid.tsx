"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FollowerPointerCard } from "./ui/Pointer";
import "./style.css"

const Grid = () => {
  return (
    <div>
      <h1 className="heading pt-10 pb-20">
        About 
        <span className="text-purple"> Me</span>
      </h1>
      <FollowerPointerCard
                    title = "Read More"
                    >
      <BentoGrid className="max-w-4xl mx-auto">
      
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            headerImageUrl={item.headerImageUrl}
            link={item.link}
            header={item.header}
            
            className={i === 3 || i === 6 || i === 10 ? "col-span-2 p-3" : "p-3"}
          />
        ))}
        
      </BentoGrid>
      </FollowerPointerCard>  
    </div>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Project Ideas",
    description: "A list of project ideas. Message me if you'd like to collaborate or if you have ideas!",
    header: <Skeleton />,
    headerImageUrl: "/coolab.png",
    link: "https://github.com/NelsonBermeo/projectideas",
  },
  {
    title: "Stevens Computer Science Club",
    description: "Read about how SCSC changed my life and maybe get involved!",
    header: <Skeleton />,
    headerImageUrl: "/csclub.png",
    link: "https://nelsonbermeo.blogspot.com/2024/08/i-love-stevens-computer-science-club.html",
  },
  {
    title: "Upcoming Events",
    description: "A list of cool events! Join me and message me about any events you'll attend!",
    header: <Skeleton />,
    headerImageUrl: "/hackathon.jpg",
    link: "https://github.com/NelsonBermeo/upcomingevents",
  },
  {
    title: "My Socials",
    description: "I'm active on multiple accounts, my blog, discord, linkedin, reddit, github, hotmail. Message me anywhere. Please reach out to eat with me if I don't to you!",
    header: <Skeleton />,
    headerImageUrl: "/social.jpg",
    link: "https://linktr.ee/NelsonBermeo",
  },
  {
    title: "My Demons",
    description: "Read about my struggle through addiciton and hopefully take something from it.",
    header: <Skeleton />,
    headerImageUrl: "/addiction.jpg",
    link: "https://nelsonbermeo.blogspot.com/2024/08/my-demons.html",
  },
  {
    title: "My Mentality",
    description: "Read about my mindset and how it came to be.",
    header: <Skeleton />,
    headerImageUrl: "/goggins.jpg",
    link: "https://nelsonbermeo.blogspot.com/2024/08/my-mentality.html",
  },
  {
    title: "My Resume",
    description: "I am currently searching for Spring 2025 Co-op opportunities and Summer 2025 opportunities. Internships or research would both be amazing experiences for me. Read my resume and continue looking through my website to learn more about my professional skills.",
    header: <Skeleton />,
    headerImageUrl: "/resumeimg.jpg",
    link: "https://drive.google.com/file/d/1h6ayI2RPfhWbIT3sslCYVPQmMjYVJZxY/view?usp=sharing",
  },
  {
    title: "My Projects",
    description: "Read about every project I've ever made!",
    header: <Skeleton />,
    headerImageUrl: "/code.jpg",
    link: "https://nelsonbermeo.blogspot.com/2024/08/my-projects.html",
  },
  {
    title: "I Love My Family",
    description: "A story thanking my family for giving me the world.",
    header: <Skeleton />,
    headerImageUrl: "/nelsonfam2.png",
    link: "https://nelsonbermeo.blogspot.com/2024/08/i-love-my-family.html",

  },
  {
    title: "Currently I Am...",
    description: "Read about what I'm currently working on and doing!",
    header: <Skeleton />,
    headerImageUrl: "/curious.jpg",
    link: "https://nelsonbermeo.blogspot.com/2024/08/currently-i-am.html",
    
  },
  {
    title: "Borrow a Book From My Collection!",
    description: "Visit a google doc containing every book I own and message me if you'd like to borrow one. Books range from computer science topics, biographies, non-fiction, and classics!",
    header: <Skeleton />,
    headerImageUrl: "/books.jpg",
    link: "https://docs.google.com/document/d/15PkM7qbb-98mWexAoRedMO_jIti7LQkH4yelPL_eO7E/edit?usp=sharing",
    
  },
  {
    title: "My Goals",
    description: "Read about my goals!",
    header: <Skeleton />,
    headerImageUrl: "/goal.png",
    link: "https://nelsonbermeo.blogspot.com/2024/08/my-goals.html",
    
  },
];

export default Grid;
