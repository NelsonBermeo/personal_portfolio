import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";
import HTMLlogo from "../public/htmllogo.png";
import CSSlogo from "../public/cssLogo.png";
import JSlogo from "../public/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail-removebg-preview.png";
import Pythonlogo from "../public/Python-logo-notext.svg-removebg-preview.png";
import TypeScriptlogo from "../public/Typescript_logo_2020.svg-removebg-preview.png";
import SHADCNlogo from "../public/shacnUI.png";
import JQERYlogo from "../public/jqury.png";
import SASSlogo from "../public/1280px-Sass_Logo_Color.svg-removebg-preview.png";
import Framerlogo from "../public/frammer.png";
import GSAPlogo from "../public/gsapicon.png";
import NEXTlogo from "../public/NEXTICONSK.png";
import Reactlogo from "../public/re.svg";
import Bootstraplogo from "../public/boos.png";
import cppImage from "../public/c-.png";
import javaImage from "../public/java.png";
import cppnewImage from "../public/cppnewimage.svg.png";
import qiskit from "../public/Qiskit.svg.png";
import tensorflow from "../public/TensorFlow.svg.png";
import PyTorch from "../public/pyTorch.svg.png";
import sb from "../public/sb.png";
import numpy from "../public/numpy.png";
import pandas from "../public/pandas.png";

import Tailwindlogo from "../public/tail.svg";
import MaterialUIlogo from "../public/material-ui-logo-5BDCB9BA8F-seeklogo.com-removebg-preview.png";
import VSCodeLogo from "../public/visual-studio-code-logo-449D71944F-seeklogo.com-removebg-preview.png";
import GitHubLogo from "../public/github.png";
import GitLogo from "../public/png-clipart-red-sign-logo-git-logo-icons-logos-emojis-tech-companies-thumbnail-removebg-preview.png";
import Figmalogo from "../public/figma.png"; // Reusing ChatGPTLogo for Figma

const skills = [
  {
    category: "Programming Languages",
    items: [
      // { logo: HTMLlogo, name: "HTML" },
      { logo: cppImage, name: "C++" },
      { logo: javaImage, name: "Java" },
      { logo: Pythonlogo, name: "Python" },
      // { logo: TypeScriptlogo, name: "TypeScript" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { logo: sb, name: "SeaBorn" },
      { logo: numpy, name: "Numpy" },
      { logo: pandas, name: "Pandas" },
      // { logo: Framerlogo, name: "Framer Motion" },
      // { logo: GSAPlogo, name: "GSAP" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { logo: qiskit, name: "Qiskit" },
      { logo: tensorflow, name: "TensorFlow" },
      { logo: PyTorch, name: "Pytorch" },
      // { logo: Tailwindlogo, name: "Tailwind CSS" },
      // { logo: MaterialUIlogo, name: "Material-UI" },
    ],
  },
  {
    category: "Technical Tools",
    items: [
      // { logo: Figmalogo, name: "Figma" },
      { logo: VSCodeLogo, name: "VS Code" },
      { logo: GitHubLogo, name: "GitHub" },
      { logo: GitLogo, name: "Git" },
      // { logo: GitLogo, name: "Git" },
    ],
  },
];

const Skills = () => {

  return (
    <div className="w-full" id="Topskills">
      <h1 className="heading mt-10 mb-20">
        <span className="text-purple">Professional </span>
        Skills
      </h1>
      <div className="w-full pt-15 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-4">
        {skills.map((skillCategory, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              backgroundColor: "rgb(12,15,37)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex flex-col p-6 gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {skillCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="mb-2"
                      />
                      <p className="text-gray-800 dark:text-white font-medium">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;