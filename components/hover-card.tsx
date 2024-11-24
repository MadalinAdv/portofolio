"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function HoverCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={twMerge(
        "relative h-full rounded-xl p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm border border-neutral-800/50",
        className
      )}
      initial={false}
      animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 opacity-0"
        initial={false}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

