import { motion } from "motion/react";

export function FloatingShapes() {
  const shapes = [
    { size: 220, duration: 26, delay: 0,  x: "5%",  y: "12%", color: "bg-pink-500/15" },
    { size: 260, duration: 32, delay: 2,  x: "78%", y: "60%", color: "bg-fuchsia-500/18" },
    { size: 160, duration: 22, delay: 4,  x: "60%", y: "8%",  color: "bg-rose-500/16" },
    { size: 300, duration: 30, delay: 1,  x: "18%", y: "78%", color: "bg-pink-400/14" },
    { size: 180, duration: 24, delay: 3,  x: "88%", y: "30%", color: "bg-fuchsia-400/18" },
    { size: 220, duration: 28, delay: 5,  x: "42%", y: "72%", color: "bg-pink-300/14" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`
            absolute rounded-full blur-3xl 
            ${shape.color} 
            mix-blend-screen
          `}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}