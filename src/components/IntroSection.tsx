import { useEffect, useState } from "react";
import SocialsTab from "./SocialsTab";

const IntroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`flex flex-col relative justify-center items-center gap-6 h-screen w-full bg-transparent px-32 z-10 transition-all duration-1000 ease-out ${
        isLoaded ? "blur-none opacity-100" : "blur-md opacity-0"
      }`}
    >
      <div
        className={`flex items-center h-fit w-7/12 text-white shadow-6xl transition-all duration-1000 ease-out ${
          isLoaded ? "blur-none opacity-100" : "blur-md opacity-0"
        }`}
      >
        <p className="font-family-recoletaRegular text-4xl text-[#e6e6dd] text-wrap">
          <span className="text-7xl">Hey, I am Divyansh,</span> a
          <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
            <span> </span>Software Developer and Designer
          </span>{" "}
          based in Bengaluru.
        </p>
      </div>
      <SocialsTab />
    </div>
  );
};

export default IntroSection;
