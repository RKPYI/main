"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Zap, Globe, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const timelineEvents = [
  {
    title: "Joined UBIG LKS Bootcamp",
    date: "December 2024 – January 2025",
    description: "Completed an intensive full-stack web development bootcamp. I learned Laravel 11 & React 18",
    image: null
  },
  {
    title: "Started Internship as Full-stack Web Developer",
    date: "January 2025 – July 2025",
    description: "Worked on Laravel and API development for eSchool SaaS Website.",
    image: null
  },
  {
    title: "Web Technology – 1st Place (Mojokerto)",
    date: "February 2025",
    description: "Earned 1st place in Mojokerto’s Web Technology competition — my first real recognition in web development.",
    image: null
  },
  {
    title: "Web Technology – Provincial Level (Jawa Timur)",
    date: "April 2025",
    description: "Represented my city at the Jawa Timur provincial level and placed 5th among the best competitors across the region.",
    image: "/certificates/webtech.png"
  }
];

const skills = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Comfortable with Laravel backend development and building robust APIs.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Deploy and manage applications using AWS Lightsail and Vercel.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Passionate about automating workflows and improving efficiency.",
  },
  {
    icon: Globe,
    title: "Full-stack Development",
    description: "Building complete web solutions from frontend to backend.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 mb-12"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a <span className="text-foreground font-semibold">12th-grade high school student from Indonesia</span>,
            passionate about building practical digital solutions that solve real-world problems.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in web development started with school subject and has grown into a serious pursuit
            of crafting efficient, scalable applications. I enjoy the entire development process —
            from designing user interfaces to architecting backend systems.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, I'm exploring new technologies, reading about system design,
            or working on automation projects that make life easier. I believe in continuous
            learning and sharing knowledge with the community.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-6"
          >
            What I Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.title} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow will-change-transform">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{skill.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Laravel",
              "PHP",
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "MySQL",
              "AWS Lightsail",
              "Vercel",
              "Git",
              "REST APIs",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* My Journey Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8">My Journey</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0 will-change-transform"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{event.description}</p>
                    {event.image && (
                      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-contain"
                          priority={index === 0}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
