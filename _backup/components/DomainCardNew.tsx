import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DomainCardNewProps {
  category: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
  delay?: number;
}

export function DomainCardNew({
  category,
  title,
  description,
  image,
  delay = 0
}: DomainCardNewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group cursor-pointer"
    >
      <div 
        className="relative overflow-hidden rounded-2xl p-6 h-[280px] flex flex-col justify-between bg-zinc-950 border border-white/10 transition-all duration-500 hover:border-yellow-600/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
          <ImageWithFallback 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-zinc-400 border border-white/10 uppercase tracking-wider">
            {category}
          </span>
        </div>
        
        <div className="relative z-10 space-y-2">
          <h3 className="text-white">{title}</h3>
          <p className="text-zinc-400">{description}</p>
        </div>
        
        {/* Arrow Icon */}
        <div className="absolute bottom-6 right-6 z-10">
          <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-yellow-600/10 group-hover:border-yellow-600/30 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-yellow-600" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
