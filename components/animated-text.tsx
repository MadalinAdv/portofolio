"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const words = "madalin".split("");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className="flex overflow-hidden text-6xl md:text-8xl font-bold text-white/80"
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={child} className="mx-1">
          {word} 
        </motion.span>
        
      ))}
    </motion.div>
    
  );
}