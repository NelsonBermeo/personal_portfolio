"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { FollowerPointerCard } from "./ui/Pointer";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
        <h1 className="heading p-10">
        My
        <span className="text-purple"> Socials </span>
        
      </h1>
      
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Youtube
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Here I post about my life at Stevens, my philisophy, and program demonstrations. Click again to be redirected.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        LinkedIn
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Here I have my professional advances all on one page. I post about opportunities, my experiences, books and events. Stevens Computer Science Club (SCSC) also has their own LinkedIn. Click again to be redirected.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Blogger
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Here I post about everything: my mindset, books, experiences, projects, weightlifting, etc. Click again to be redirected.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        GitHub
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Here I share my projects with descriptions. I also have repos for accountability, events, ideas, and project ideas. Click again to be redirected.
      </p>
    </div>
  );
};

const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "/youtube2.png",
      link: "https://www.youtube.com/@nelsonberm3910", // Added link
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "/li.png",
      link: "https://www.linkedin.com/in/nelson-bermeo-9118b11ba/", // Added link
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "/blog2.png",
      link: "https://nelsonbermeo.blogspot.com/", // Added link
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "/github2.png",
      link: "https://github.com/NelsonBermeo", // Added link
    },
  ];
