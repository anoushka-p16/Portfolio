import { Card } from "./ui/card";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface AnimatedExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type?: "work" | "education";
  index: number;
}

export function AnimatedExperienceCard({ 
  title, 
  company, 
  location, 
  period, 
  description,
  type = "work",
  index
}: AnimatedExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      <Card
        className="
          p-6 md:p-7 
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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
          <div>
            <motion.h3 
              className="mb-1 text-foreground font-semibold text-lg"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>
            <p className="text-primary text-sm font-medium tracking-wide">
              {company}
            </p>
            {type && (
              <span className="inline-flex mt-2 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wide bg-pink-500/10 text-pink-300/90 border border-primary/30">
                {type === "work" ? "Work Experience" : "Education"}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1 text-xs md:text-sm text-muted-foreground md:text-right">
            <div className="flex items-center gap-2 md:justify-end">
              <Calendar className="w-4 h-4 text-primary/80" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <MapPin className="w-4 h-4 text-primary/80" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {description.map((item, i) => (
            <motion.li 
              key={i} 
              className="flex gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}