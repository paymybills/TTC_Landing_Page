import { motion } from "motion/react";
import { Calendar, Users, MapPin } from "lucide-react";

interface Activity {
  title: string;
  date: string;
  participants?: number;
  location?: string;
}

interface ActivityCardProps {
  title: string;
  activities: Activity[];
  delay?: number;
}

export function ActivityCard({ title, activities, delay = 0 }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="bg-[#1A0B2E]/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
        <h3 className="text-white mb-4 uppercase tracking-wider">{title}</h3>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="border-l-2 border-purple-500/30 pl-4 hover:border-purple-400 transition-colors duration-300"
            >
              <p className="text-purple-100 mb-1">{activity.title}</p>
              <div className="flex flex-wrap gap-3 text-purple-300/60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{activity.date}</span>
                </div>
                {activity.participants && (
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{activity.participants}</span>
                  </div>
                )}
                {activity.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{activity.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
