import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BioSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="flex relative w-full min-h-screen items-center justify-center z-10">
      <motion.div
        ref={ref}
        className="flex items-center mt-20 h-fit w-9/12 text-white shadow-6xl"
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
        <div className="flex flex-col w-1/2 text-8xl">
          <p className="font-family-recoletaRegular text-[#e6e6dd]">
            <span className="font-serif font-regular">"</span>What if I could do
            it like this<span className="font-serif font-regular">"</span>
          </p>
          <p className="text-3xl font-family-recoletaRegular text-[#907dac]">
            Yeah this is just how my mind works.
          </p>
        </div>
        <div className="flex flex-col w-1/2 font-family-covesLight text-2xl text-[#e6e6dd]">
          <p>
            So you've stumbled upon my corner of the internet! I'm a fullstack
            web developer and designer, and I love making websites that are
            clean and eye-pleasing (first impression matters), but I also make
            sure they pack some juice so they can actually be of some use.
          </p>
          <p className="mt-4">
            So you've stumbled upon my corner of the internet! I'm a fullstack
            web developer and designer, and I love making websites that are
            clean and eye-pleasing (first impression matters), but I also make
            sure they pack some juice so they can actually be of some use.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BioSection;
