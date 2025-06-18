import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

interface TechIconProps {
  svgPath: string;
  alt?: string;
  makeWhite?: boolean;
}

const TechIcon: React.FC<TechIconProps> = ({
  svgPath,
  alt = "Tech icon",
  makeWhite = false,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const maxDistance = 24;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance > 0) {
      const factor = Math.min(distance, maxDistance) / distance;
      x.set(deltaX * factor * 0.3);
      y.set(deltaY * factor * 0.3);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className="flex cursor-pointer items-center justify-center w-30 h-30 rounded-full shadow-lg"
      style={{ x: springX, y: springY }}
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
      whileHover={{ scale: 1.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={svgPath}
        alt={alt}
        className={`w-18 h-18 object-contain ${
          makeWhite ? "filter brightness-0 invert" : ""
        }`}
      />
    </motion.button>
  );
};

export default TechIcon;
