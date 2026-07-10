import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export function ProjectCard({ title, description, image, tags, github, demo }: ProjectCardProps) {
  return (
    <Card
      className="
        overflow-hidden 
        hover:-translate-y-1 
        transition-all duration-300 
        bg-[#05010f]/90 
        backdrop-blur-lg 
        border border-border/60 
        rounded-xl
        hover:border-primary/70 
        hover:shadow-[0_0_35px_rgba(244,114,182,0.35)]
      "
    >
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden bg-[#070219] relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="flex-1 text-foreground font-semibold text-lg leading-snug">
            {title}
          </h3>
          <div className="flex gap-2">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="
                bg-pink-500/10 
                border border-primary/40 
                text-[11px] 
                rounded-full 
                tracking-wide
              "
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}