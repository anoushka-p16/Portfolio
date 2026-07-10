import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

interface AnimatedProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  index: number;
}

export function AnimatedProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  github, 
  demo,
  index 
}: AnimatedProjectCardProps) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.02 }}
    >
      <Card
        className="
          overflow-hidden 
          h-full 
          flex flex-col
          bg-[#05010f]/90 
          backdrop-blur-lg 
          border border-border/60 
          rounded-xl
          hover:border-primary/70 
          hover:shadow-[0_0_35px_rgba(244,114,182,0.35)]
          transition-all duration-300 
          group
        "
      >
        {/* Media */}
        <div className="aspect-video w-full overflow-hidden bg-[#070219] relative">
          {image ? (
            <motion.img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-500/40 via-fuchsia-500/30 to-slate-900/80 flex items-center justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-pink-100/80">
                Featured Project
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="flex-1 text-foreground font-semibold text-lg leading-snug">
              {title}
            </h3>
            <div className="flex gap-2">
              {github && (
                <motion.a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              {demo && (
                <motion.a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <Badge
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
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}