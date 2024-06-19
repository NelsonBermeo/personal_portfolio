"use client";
import { TextGenerateEffect } from './ui/TextGenerateEffect';

import React, { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import "./style.css";
import Typed from "typed.js";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import face from "../public/NeneFace.png";

const AboutMe = () => {

  useEffect(() => {
    var typed = new Typed(".multiple-text", {
      strings: [
        "Machine Learning",
        "Quantum Computing",
        "Software Engineering",
        "Deep Learning",
        "Mathematics",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="mb-[-8rem] containerlarh" id="about">
      
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
          // style={{ backgroundColor: "white" }} // Set background color for the first box
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
          // style={{ backgroundColor: "purple" }} // Set background color for the second box
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
          // style={{ backgroundColor: "blue" }} // Set background color for the third box
        />
      </div>

      <section className="home rounded-full">
        
        <div className="home-content">
          <h3>My name is</h3>
          <h1>Nelson Bermeo</h1>
          <h3>
            I Love{" "}
            <span
              className="multiple-text"
              style={{ color: "#65aef6" }} // Change color here
            ></span>
          </h3>
          {/* <h3>
            I Love <span className="multiple-text"></span>
          </h3> */}
          <p>
          I am a student at Stevens Institute of Technology, located in the metropolitan area, studying Computer Science. I am dedicated to acquiring new skills both inside and outside the classroom. My goal is to one day contribute to computational projects that make a meaningful impact, whether by curing patients, reducing environmental damage, or addressing other significant challenges. The applications of machine learning are limitless, and I am eager to explore and innovate within this exciting field. 
          </p>
          

          {/* <div className="social-media">
            <a
              href="https://www.linkedin.com/in/rohitrai0/"
              target="blank"
              
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rohitrai12/"
              target="blank"
              
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/Rohitrai_09"
              target="blank"
             
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://linktr.ee/rohitrai2"
              target="blank"
              
              rel="noopener noreferrer"
            >
              <FaLink />
            </a>
          </div>
          <a
            href="/resume.pdf"
            className="btn"
            download
            rel="noopener noreferrer"
          >
            Download Resume
          </a> */}
        </div>

        <div className="home-image">
          <Image src={face} alt="Hero Image" />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;