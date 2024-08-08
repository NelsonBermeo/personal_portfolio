"use client"
import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import MagicButton from './ui/MagicButton';
import { Vortex } from './ui/Vortex';
import '@/components/style.css';
import React from 'react'

const Footer = () => {

  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 section-with-margin" id="contact">
      

      <div className="flex flex-col items-center">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
      >
        <h1 className="heading lg:max-w-[45vw]">
          Contact me through my Email:<span className="text-purple"> nbermeo@stevens.edu</span>
        </h1>
      
        <ul className="text-white-200 md:mt-10 my-5 text-center">
        <li>Thank you for visiting my website!</li>
        
        
        </ul>

        
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Thank you for visiting my website.
        </p> */}
        </Vortex>
        {/* <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        

      {/* <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map((info) => (
        <a
          key={info.id}
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <img src={info.img} alt="icons" width={20} height={20} />
        </a>
      ))}
    </div> */}
      </div>
    </footer>
  );
};

export default Footer