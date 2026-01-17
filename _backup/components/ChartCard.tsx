import { motion } from "motion/react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

interface ChartCardProps {
  title: string;
  value: string;
  data: Array<{ name: string; value: number }>;
  delay?: number;
}

export function ChartCard({ title, value, data, delay = 0 }: ChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="bg-[#1A0B2E]/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
        <div className="mb-4">
          <p className="text-purple-300/70 uppercase tracking-wider mb-2">{title}</p>
          <p className="text-white">{value}</p>
        </div>
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="name" 
                hide 
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: 'rgba(26, 11, 46, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#E9D5FF'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
