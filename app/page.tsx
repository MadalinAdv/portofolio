"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animated-text";
import { HoverCard } from "@/components/hover-card";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSteam,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { SparklesCore } from "@/components/ui/sparkles";
const socialLinks = [
  {
    name: "Discord",
    icon: IconBrandDiscord,
    username: "@yourusername",
    href: "https://discord.com/users/yourusername",
  },
  {
    name: "Youtube",
    icon: IconBrandYoutube,
    username: "@yourusername",
    href: "https://youtube.com/@yourusername",
  },
  {
    name: "Instagram",
    icon: IconBrandInstagram,
    username: "@yourusername",
    href: "https://instagram.com/yourusername",
  },
  {
    name: "Steam",
    icon: IconBrandSteam,
    username: "/id/yourusername",
    href: "https://steamcommunity.com/id/yourusername",
  },
  {
    name: "Github",
    icon: IconBrandGithub,
    username: "/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: IconBrandLinkedin,
    username: "/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
];

export default function Home() {
  return (
    
    <main className="relative min-h-screen bg-gradient-to-br from-black to-neutral-900 flex flex-col items-center justify-center p-4 overflow-hidden">
      
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Animated background */}
  

      <div className="w-full max-w-4xl space-y-8 z-10">
        <AnimatedText />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <HoverCard>
                <div className="flex items-center gap-4 p-2">
                  <link.icon className="w-6 h-6 text-white/70" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white/70">
                      {link.name}
                    </span>
                    <span className="text-sm text-white/50">
                      {link.username}
                    </span>
                  </div>
                </div>
              </HoverCard>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}