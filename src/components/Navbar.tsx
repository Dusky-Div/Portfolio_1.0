import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navlink from "./Navlink";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 400, damping: 40, mass: 0.8 }
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex fixed top-0 left-0 w-full py-7 px-32 justify-end text-white font-family-covesLight tracking-widest text-xl z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "backdrop-blur-md bg-white/[0.05] border-b border-white/[0.1] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Border */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-600 via-violet-700 to-purple-800"
        style={{ width: progressWidth }}
        initial={{ width: "0%" }}
      />

      {/* Optional: Glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-600 to-purple-700 blur-sm opacity-60"
        style={{ width: progressWidth }}
        initial={{ width: "0%" }}
      />

      <div
        className={`flex gap-8 transition-all duration-1000 ease-out ${
          isLoaded ? "blur-none opacity-100" : "blur-md opacity-0"
        }`}
      >
        <Navlink title="about" />
        <Navlink title="skills" />
        <Navlink title="projects" />
        <Navlink title="experience" />
      </div>
    </div>
  );
};

export default Navbar;
