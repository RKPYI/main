"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image?: string; // Optional image property
  index: number;
}

export function ProjectCard({ title, description, url, tags, image, index }: ProjectCardProps) {
  const t = useTranslations('projects');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full will-change-transform"
    >
      <Card className="h-full flex flex-col overflow-hidden pt-0">
        {/* Project Image - 16:9 Aspect Ratio */}
        {image && (
          <div className="relative w-full aspect-video overflow-hidden bg-muted">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105 will-change-transform"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
              fetchPriority={index < 2 ? "high" : "auto"}
              loading={index < 2 ? "eager" : "lazy"}
            />
          </div>
        )}
        
        <CardHeader>
          <CardTitle>{t(title)}</CardTitle>
          <CardDescription>{t(description)}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {t('visit')} <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
