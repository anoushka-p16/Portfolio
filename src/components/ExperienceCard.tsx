import { Card } from "./ui/card";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type?: "work" | "education";
}

export function ExperienceCard({ 
  title, 
  company, 
  location, 
  period, 
  description,
  type = "work" 
}: ExperienceCardProps) {
  return (
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
      "
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
        <div>
          <h3 className="mb-1 text-foreground font-semibold text-lg">
            {title}
          </h3>
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
        {description.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}