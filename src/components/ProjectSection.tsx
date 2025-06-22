import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="flex flex-col relative w-full min-h-screen items-center justify-center gap-10 z-10">
      <motion.div
        ref={ref}
        className="flex flex-col items-center gap-10"
        initial={{ opacity: 0, filter: "blur(8px)", y: 50 }}
        animate={
          isInView
            ? { opacity: 1, filter: "blur(0px)", y: 0 }
            : { opacity: 0, filter: "blur(8px)", y: 50 }
        }
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="flex">
          <p className="font-family-recoletaRegular text-white text-6xl">
            Some of my{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-violet-700 bg-clip-text text-transparent">
              projects
            </span>
          </p>
        </div>
        <div className="flex gap-5">
          <ProjectCard
            title="Good Reps Only"
            description="It lets you track and log your gym workouts and personal records, and manage your gym routine."
            imageUrl="../src/assets/images/sample.jpg"
            techStack={["React", "Express", "MongoDB"]}
          />
          <ProjectCard
            title="Safr"
            description="Safr helps you store your passwords and more securely and conveniently."
            imageUrl="../src/assets/images/safr.png"
            techStack={["React", "Express", "Web Crypto API", "MongoDB"]}
          />
          <ProjectCard
            title="Refactr"
            description="Let's you refactor your code and optimize it for better performance and usability."
            imageUrl="../src/assets/images/refactr.png"
            techStack={["React", "Express", "Gemini"]}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
