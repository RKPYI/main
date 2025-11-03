"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Zap, Globe, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const timelineEvents = [
  {
    key: 'bootcamp',
    image: null
  },
  {
    key: 'internship',
    image: null
  },
  {
    key: 'webtech1st',
    image: null
  },
  {
    key: 'webtechProvincial',
    image: "/certificates/webtech.webp"
  }
];

const skills = [
  {
    icon: Code2,
    key: 'backend',
  },
  {
    icon: Cloud,
    key: 'cloud',
  },
  {
    icon: Zap,
    key: 'automation',
  },
  {
    icon: Globe,
    key: 'fullstack',
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
  const t = useTranslations('about');

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
          {t('title')}
        </motion.h1>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 mb-12"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('bio1')} <span className="text-foreground font-semibold">{t('bio1Highlight')}</span>, {t('bio1Continue')}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('bio2')}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('bio3')}
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
            {t('whatIDo')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.key} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow will-change-transform">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{t(`skills.${skill.key}.title`)}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{t(`skills.${skill.key}.description`)}</p>
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
          <h2 className="text-3xl font-bold mb-6">{t('techStack')}</h2>
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
          <h2 className="text-3xl font-bold mb-8">{t('myJourney')}</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.key}
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
                        <CardTitle className="text-xl mb-2">{t(`timeline.${event.key}.title`)}</CardTitle>
                        <p className="text-sm text-muted-foreground">{t(`timeline.${event.key}.date`)}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{t(`timeline.${event.key}.description`)}</p>
                    {event.image && (
                      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={event.image}
                          alt={t(`timeline.${event.key}.title`)}
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
