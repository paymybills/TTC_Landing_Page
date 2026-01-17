import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const domains = [
  {
    id: "ml",
    title: "Machine Learning",
    emoji: "🤖",
    gradient: "from-purple-700 to-purple-900",
    glow: "hover:shadow-[0_0_60px_rgba(34,211,238,0.5)]",
    image: "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwQUklMjBjaXJjdWl0c3xlbnwxfHx8fDE3NTk4MTI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Neural networks, AI circuits, and deep learning",
  },
  {
    id: "quant",
    title: "Quant Analysis",
    emoji: "📊",
    gradient: "from-purple-600 to-fuchsia-600",
    glow: "hover:shadow-[0_0_60px_rgba(217,70,239,0.5)]",
    image: "https://images.unsplash.com/photo-1754304342484-3256d59778e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljYWwlMjBlcXVhdGlvbnMlMjBjaGFydHN8ZW58MXx8fHwxNzU5ODEyODYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Mathematical modeling and financial analysis",
  },
  {
    id: "gametheory",
    title: "Game Theory",
    emoji: "♟️",
    gradient: "from-purple-800 to-purple-500",
    glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]",
    image: "https://images.unsplash.com/photo-1662169847892-565cce8f901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMHN0cmF0ZWd5JTIwZ2FtZXxlbnwxfHx8fDE3NTk4MTI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Strategic decision-making and optimization",
  },
];

export function DomainCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {domains.map((domain, index) => (
        <motion.div
          key={domain.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <motion.a
            href="#"
            className={`block rounded-3xl bg-gradient-to-br ${domain.gradient} overflow-hidden shadow-[0_8px_32px_rgba(139,92,246,0.3)] ${domain.glow} transition-all duration-400 cursor-pointer group`}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={domain.image}
                alt={domain.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-4 right-4 text-5xl opacity-80 group-hover:scale-125 transition-transform duration-300">
                {domain.emoji}
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm">
              <h3 className="mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {domain.title}
              </h3>
              <p className="text-purple-200">{domain.description}</p>
            </div>
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}
