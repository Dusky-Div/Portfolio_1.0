// TechStack.tsx
import React from "react";
import TechIcon from "./TechIcon";

// Import all SVGs
import expressIcon from "../assets/svg/express-js-seeklogo.svg";
import firebaseIcon from "../assets/svg/firebase-seeklogo.svg";
import gitIcon from "../assets/svg/git-seeklogo.svg";
import githubIcon from "../assets/svg/github-seeklogo-1.svg";
import mongodbIcon from "../assets/svg/mongodb-seeklogo.png";
import nodejsIcon from "../assets/svg/node-js-seeklogo.svg";
import postmanIcon from "../assets/svg/postman-seeklogo.svg";
import reactIcon from "../assets/svg/react-seeklogo.svg";
import reduxIcon from "../assets/svg/redux-seeklogo.svg";
import typescriptIcon from "../assets/svg/typescript-seeklogo.svg";
import motionIcon from "../assets/svg/motion-seeklogo.png";
import tailwindIcon from "../assets/svg/tailwind-css-seeklogo.svg";

interface TechItem {
  name: string;
  svgPath: string;
  makeWhite?: boolean;
}

const TechStack: React.FC = () => {
  const techIcons: TechItem[] = [
    { name: "React", svgPath: reactIcon },
    { name: "TypeScript", svgPath: typescriptIcon },
    { name: "Tailwind", svgPath: tailwindIcon },
    { name: "Motion", svgPath: motionIcon },
    { name: "Redux", svgPath: reduxIcon },
    { name: "Node.js", svgPath: nodejsIcon },
    { name: "Express.js", svgPath: expressIcon, makeWhite: true },
    { name: "Firebase", svgPath: firebaseIcon },
    { name: "MongoDB", svgPath: mongodbIcon },
    { name: "Postman", svgPath: postmanIcon },
    { name: "Git", svgPath: gitIcon },
    { name: "GitHub", svgPath: githubIcon, makeWhite: true },
  ];

  return (
    <div className="flex flex-col relative justify-center items-center gap-6 h-screen w-full bg-transparent px-32 z-10">
      <div className="flex flex-col items-center gap-10 mt-20 h-fit w-1/2 text-white shadow-6xl">
        <p className="font-family-recoletaRegular text-6xl">
          Tech I work upon<span className="text-[#9d79d4]">...</span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {techIcons.map((tech, index) => (
            <TechIcon
              key={index}
              svgPath={tech.svgPath}
              alt={tech.name}
              makeWhite={tech.makeWhite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
