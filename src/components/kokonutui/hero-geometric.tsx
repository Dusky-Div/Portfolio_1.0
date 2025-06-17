import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const wakandaSymbols = [
  "◊",
  "◈",
  "◇",
  "△",
  "▽",
  "▷",
  "◁",
  "⧨",
  "⧩",
  "⧪",
  "⧬",
  "⧭",
  "⧮",
  "⧯",
  "⧰",
  "⧱",
  "⧲",
  "⧳",
  "⧴",
  "⧵",
  "⧶",
  "⧷",
  "⧸",
  "⧹",
  "⧺",
  "⌬",
  "⌭",
  "⌮",
  "⌯",
  "⌰",
  "⌱",
  "⌲",
  "⌳",
  "⌴",
  "⌵",
  "⌶",
  "⌷",
];

function WakandaLetter({
  className,
  delay = 0,
  symbol,
  size = 32,
  rotate = 0,
  style,
}: {
  className?: string;
  delay?: number;
  symbol: string;
  size?: number;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        rotate: rotate - 45,
      }}
      animate={{
        opacity: 0.25,
        scale: 1,
        rotate: rotate,
      }}
      transition={{
        duration: 3,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute pointer-events-none", className)}
      style={style}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [rotate, rotate + 5, rotate],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          fontSize: `${size}px`,
        }}
        className="text-gray-400 font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
      >
        {symbol}
      </motion.div>
    </motion.div>
  );
}

export default function AnimatedBackground() {
  // Generate random positions and properties for letters
  const generateLetters = () => {
    const letters = [];
    const numLetters = 25; // Number of letters to scatter

    for (let i = 0; i < numLetters; i++) {
      const symbol =
        wakandaSymbols[Math.floor(Math.random() * wakandaSymbols.length)];
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = 20 + Math.random() * 40; // Size between 20-60px
      const rotate = Math.random() * 360; // Random rotation
      const delay = Math.random() * 4; // Random delay up to 4 seconds

      letters.push({
        id: i,
        symbol,
        left: `${left}%`,
        top: `${top}%`,
        size,
        rotate,
        delay,
      });
    }
    return letters;
  };

  const letters = generateLetters();

  return (
    <div className="absolute inset-0 w-full h-screen overflow-hidden bg-[#030303] -z-10 pointer-events-none">
      {/* Wakanda purple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/[0.08] via-violet-600/[0.06] to-indigo-600/[0.08] blur-3xl" />

      {/* Scattered Wakanda letters */}
      <div className="absolute inset-0 overflow-hidden">
        {letters.map((letter) => (
          <WakandaLetter
            key={letter.id}
            symbol={letter.symbol}
            size={letter.size}
            rotate={letter.rotate}
            delay={letter.delay}
            className=""
            style={{
              left: letter.left,
              top: letter.top,
            }}
          />
        ))}
      </div>

      {/* Additional larger accent letters */}
      <WakandaLetter
        symbol="◊"
        size={80}
        rotate={45}
        delay={0.5}
        className="left-[10%] top-[20%]"
      />
      <WakandaLetter
        symbol="⬢"
        size={60}
        rotate={-30}
        delay={1.2}
        className="right-[15%] top-[30%]"
      />
      <WakandaLetter
        symbol="◆"
        size={70}
        rotate={60}
        delay={0.8}
        className="left-[20%] bottom-[25%]"
      />
      <WakandaLetter
        symbol="⧫"
        size={50}
        rotate={-45}
        delay={1.5}
        className="right-[25%] bottom-[35%]"
      />
      <WakandaLetter
        symbol="▲"
        size={65}
        rotate={15}
        delay={0.3}
        className="center left-[50%] top-[15%]"
      />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
