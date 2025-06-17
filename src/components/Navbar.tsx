import { useState, useEffect } from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
      {/* <button
        className={`font-family-covesLight font-bold tracking-widest hover:text-[#c4b0ff] cursor-pointer text-2xl transition-all duration-1000 ease-out ${
          isLoaded ? "blur-none opacity-100" : "blur-md opacity-0"
        }`}
      >
        Divyansh Yaduvanshi
      </button> */}
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
