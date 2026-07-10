import { AnimatedProjectCard } from "./components/AnimatedProjectCard";
import { AnimatedExperienceCard } from "./components/AnimatedExperienceCard";
import { FloatingShapes } from "./components/FloatingShapes";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import meImg from "./components/images/me.jpeg";
import artAnalyzeImg from "./components/images/artanalyze.png";
import igaImg from "./components/images/iga.png";
import filmImg from "./components/images/filmy.png";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Code2, 
  Briefcase, 
  Heart, 
  GraduationCap,
  Star
} from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const projects = [
    {
      title: "Code for Good - International Girls Academy",
      description: "An engagement platform for the International Girls Academy, enabling 2K+ users to access programs, register for events, and track progress.",
      image: igaImg,
      tags: ["Retrieval-Augmented Generation (RAG)", "Next.js", "TypeScript", "Supabase"],
      github: "#",
      demo: "#"
    },
    {
      title: "MenteeSync",
      description: "An automated scheduling system, streamlining coordination for 200+ engineering students.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzE4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Google Calendar API", "SMTP", "Python", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "PayRisk",
      description: "A fraud-detection model that improves payment-risk flagging accuracy and explains its decisions.",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzYxMzIxNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "XGBoost", "SHAP", "SQL", "Pandas", "NumPy", "Scikit-learn"],
      github: "#",
      demo: "#"
    },
    {
      title: "ArtAnalyze",
      description: "A computer vision + machine learning platform that estimates an artwork's style, difficulty, materials, and time to recreate.",
      image: artAnalyzeImg,
      tags: ["Python", "Uvicorn", "OpenCV", "PyTorch", "Pillow"],
      github: "#",
      demo: "#"
    },
    {
      title: "FilmFind",
      description: "A social movie platform, enabling users to explore, review, and curate watchlists while receiving ML-powered film recommendations based on their activity.",
      image: filmImg,
      tags: ["Flask", "RESI API", "React", "SQL"],
      github: "#",
      demo: "#"
    }
  ];

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "JPMorgan Chase & Co.",
      location: "New York, NY",
      period: "Summer 2026",
      description: [
        "Architected a scalable chaos-engineering pipeline to simulate AWS Lambda service failures and measure downstream resilience under production-like traffic (10,000+ requests/minute), focused on DNS/EC2 infrastructure management",
        "Automated load generation, fault injection, metric analysis, and reporting, cutting manual validation efforts by 70% and enabling frequent resilience testing",
        "Built a dependency-graph agent to map 100+ AWS resource relationships, predict likely failure paths, and generate high-impact chaos test scenarios, reducing root-cause analysis time by 35x"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "iNovate Solutions",
      location: "Herndon, VA",
      period: "Summer 2024",
      description: [
        "Developed an AI assistant using Retrieval-Augmented Generation (RAG) to deliver context-aware responses across 500+ indexed internal documents",
        "Increased retrieval accuracy by 60% through integrating Azure OpenAI with Cognitive Search",
        "Implemented a scalable backend using FastAPI and CosmosDB to log user queries and feedback",
        "Designed a responsive React dashboard to host the assistant, enhancing user accessibility and engagement"
      ]
    },
    {
      title: "Machine Learning Researcher",
      company: "NCSU Research",
      location: "Raleigh, NC",
      period: "Oct 2024 - Jul 2025",
      description: [
        "Developed a BLASTP + MCL pipeline to cluster 20,000 protein sequences across 10+ genomic datasets, uncovering patterns in biosynthetic gene clusters (BGCs) for anticancer drug discovery",
        "Automated preprocessing, reducing data prep time by 80% and standardizing features for ML modeling",
        "Conducted exploratory data analysis and visualized cluster distributions to inform downstream model design"
      ]
    }
  ];

  const extracurriculars = [
    {
      title: "Lead Engineer Mentor",
      organization: "ASCEND Engineering Program",
      period: "2024 - Present",
      description: "Led targeted review sessions across 5+ core engineering courses, achieving a 15% improvement in mentee self-assessed proficiency. Directed technical workshops and outreach initiatives, connecting 200+ students to career resources, research, and STEM pathways."
    },
    {
      title: "Teaching Assistant",
      organization: "Nrityangan Classical Dance Academy",
      period: "2021 - 2023",
      description: "Building websites and applications for local non-profit organizations"
    },
    {
      title: "Art Instructor",
      organization: "Intro to Programming Course",
      period: "Fall 2024",
      description: "Helping students learn programming fundamentals and debugging code"
    }
  ];

  const interests = [
    { icon: "🎨", name: "UI/UX Design", description: "Creating beautiful and intuitive interfaces" },
    { icon: "📚", name: "Reading", description: "Mystery and thriller novels are my favorite" },
    { icon: "☕", name: "Food", description: "Trying new cuisines and fun foods! Check out my beli." },
    { icon: "🎵", name: "Music", description: "Playing piano and discovering new artists" },
    { icon: "✈️", name: "Travel", description: "Exploring new cities and cultures" },
    { icon: "🏃‍♀️", name: "Fitness", description: "Working out at the gym, staying active" }
  ];

  const skills = [
    "JavaScript", "TypeScript", "Python", "Java", "C",
    "React", "Next.js", "Node.js",
    "HTML/CSS", "Tailwind CSS", "SQL", "MongoDB",
    "Git", "Docker", "AWS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-black to-[#02010a] text-foreground relative overflow-hidden">
      <FloatingShapes />
      
      {/* Navigation */}
      <motion.nav 
        className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/60"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-primary font-medium tracking-wide">
                Anoushka
              </span>
            </motion.div>
            <div className="flex gap-6">
              {["About", "Projects", "Experience", "Contact"].map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm md:text-base text-white hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 backdrop-blur-md rounded-full border border-primary/40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-4 h-4 text-primary fill-primary" />
                </motion.div>
                <span className="text-sm text-primary">Computer Science Student</span>
              </motion.div>
              
              <motion.h1
                className="text-4xl lg:text-6xl text-foreground leading-tight"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                <motion.span
                  className="mr-4"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  Hi! I'm
                </motion.span>

                <motion.span
                  className="font-semibold"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #f472b6, #f9a8d4, #f472b6)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Anoushka
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A passionate CS major with a love for building beautiful, functional web applications. 
                I turn ideas into reality through code, design, and a sprinkle of creativity
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    className="rounded-full border border-border/70 bg-transparent hover:border-primary hover:text-primary"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    className="rounded-full border border-border/70 bg-transparent hover:border-primary hover:text-primary"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden border border-primary/60 shadow-[0_0_45px_rgba(244,114,182,0.25)]"
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={meImg}
                  alt="Anoushka"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/25 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#05010f]/80 backdrop-blur-lg border-t border-border/60 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-foreground text-xl font-semibold tracking-wide">
              About Me
            </h2>
          </motion.div>
          
          <div className="space-y-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-[#05010f]/90 backdrop-blur-lg border border-border/60 shadow-xl">
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a Computer Science major with a passion for creating technology that makes an impact. 
                  Whether it's designing intuitive user interfaces or solving complex problems, 
                  I love the challenge of bringing ideas to life through code.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I'm not coding, you can find me traveling, reading thriller novels, 
                  or working on personal projects that combine my interests in design and development.
                </p>
              </Card>
            </motion.div>

            {/* Skills */}
            <div>
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="text-foreground text-lg font-semibold">Technical Skills</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 bg-pink-500/10 backdrop-blur-md border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all cursor-default rounded-full text-sm"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-foreground text-xl font-semibold tracking-wide">
              Featured Projects
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#05010f]/80 backdrop-blur-lg border-t border-border/60 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-foreground text-xl font-semibold tracking-wide">
              Experience
            </h2>
          </motion.div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedExperienceCard key={exp.title} {...exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-foreground text-xl font-semibold tracking-wide">
              Leadership & Involvement
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Card className="p-6 hover:shadow-[0_0_35px_rgba(244,114,182,0.35)] transition-all duration-300 bg-[#05010f]/90 backdrop-blur-lg border border-border/60 h-full">
                  <h3 className="mb-2 text-foreground font-semibold">{activity.title}</h3>
                  <p className="text-primary mb-2 text-sm font-medium">{activity.organization}</p>
                  <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">{activity.period}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-[#05010f]/80 backdrop-blur-lg border-t border-border/60 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-foreground text-xl font-semibold tracking-wide">
              Beyond CS
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Card className="p-6 hover:shadow-[0_0_30px_rgba(244,114,182,0.45)] transition-all duration-300 bg-[#05010f]/90 backdrop-blur-lg border border-border/60 text-center h-full">
                  <motion.div 
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {interest.icon}
                  </motion.div>
                  <h3 className="mb-2 text-foreground font-semibold">{interest.name}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            whileHover={{ scale: 1.2 }}
          >
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" />
          </motion.div>
          
          <motion.h2 
            className="text-foreground mb-6 text-2xl font-semibold tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Connect!
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Feel free to reach out!
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                <Mail className="w-5 h-5 mr-2" />
                anoushka.piduru@gmail.com
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border border-border/70 bg-transparent hover:border-primary hover:text-primary"
              >
                <Github className="w-5 h-5 mr-2" />
                anoushka-p16
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border border-border/70 bg-transparent hover:border-primary hover:text-primary"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                https://www.linkedin.com/in/anoushka-piduru/
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/60 bg-black/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-muted-foreground tracking-wide">
          <p>Made by Anoushka · © 2025</p>
        </div>
      </footer>
    </div>
  );
}