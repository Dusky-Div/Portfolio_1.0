// TechStack.tsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
      <div className="flex flex-col items-center gap-10 mt-20 h-fit w-fit text-white shadow-6xl">
        <motion.p
          ref={ref}
          className="font-family-recoletaRegular text-6xl"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, filter: "blur(0px)" }
              : { opacity: 0, filter: "blur(8px)" }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-violet-700 bg-clip-text text-transparent">
            Tech Stack
          </span>{" "}
          I work upon
        </motion.p>
        <div className="flex flex-wrap gap-4 w-7/12 justify-center">
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
