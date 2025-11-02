"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { socials } from "@/data/socials";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark" || resolvedTheme === "dark";
  const profileSrc = isDark ? "/profile-dark.svg" : "/profile-light.svg";

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            {mounted ? (
              <Image
                src={profileSrc}
                alt="Rangga Danu Kusuma"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            ) : (
              // Fallback during hydration
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-full">
                <span className="text-4xl font-bold text-primary">RDK</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-2 pb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
        >
          Rangga Danu Kusuma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-6"
        >
          Full-stack Web Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          I build practical digital solutions — from APIs to full-stack apps — and
          love experimenting with design, automation, and web systems.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full border border-primary/20 hover:border-primary/40 transition-all ${social.color}`}
                aria-label={social.name}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
