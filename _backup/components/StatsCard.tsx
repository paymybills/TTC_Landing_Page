import { motion } from "motion/react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  trend?: number;
  subtitle?: string;
  delay?: number;
}

export function StatsCard({ title, value, trend, subtitle, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="bg-[#1A0B2E]/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
        <div className="flex items-start justify-between mb-4">
          <p className="text-purple-300/70 uppercase tracking-wider">{title}</p>
          {trend !== undefined && (
            <div className={`flex items-center gap-1 ${trend >= 0 ? 'text-cyan-400' : 'text-pink-400'}`}>
              {trend >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm">{Math.abs(trend)}%</span>
            </div>
          )}
        </div>
        <div className="text-white mb-1">{value}</div>
        {subtitle && <p className="text-purple-300/50">{subtitle}</p>}
      </div>
    </motion.div>
  );
}
