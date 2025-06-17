import { motion } from "framer-motion";

interface NavlinkProps {
  title: string;
}

const Navlink = ({ title }: NavlinkProps) => {
  return (
    <motion.button
      className="flex cursor-pointer overflow-hidden relative"
      whileHover="hover"
      initial="initial"
    >
      <motion.p
        variants={{
          initial: { y: 0 },
          hover: { y: "-100%" },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {title}
      </motion.p>
      <motion.p
        className="absolute"
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {title}
      </motion.p>
    </motion.button>
  );
};

export default Navlink;
