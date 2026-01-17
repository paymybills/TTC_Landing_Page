import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { motion } from "motion/react";
import { Calendar as CalendarIcon, MapPin, Users } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  participants?: number;
  category: string;
}

export function CalendarSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Mock events data
  const events: Event[] = [
    {
      id: "1",
      title: "Deep Learning Workshop",
      date: new Date(2025, 9, 12),
      location: "Lab 301",
      participants: 24,
      category: "Deep Learning"
    },
    {
      id: "2",
      title: "Quant Trading Seminar",
      date: new Date(2025, 9, 15),
      location: "Virtual",
      participants: 18,
      category: "Quant"
    },
    {
      id: "3",
      title: "Game Theory Competition",
      date: new Date(2025, 9, 18),
      location: "Auditorium",
      participants: 32,
      category: "Game Theory"
    },
    {
      id: "4",
      title: "Computer Vision Talk",
      date: new Date(2025, 9, 20),
      location: "Main Hall",
      participants: 28,
      category: "Computer Vision"
    },
    {
      id: "5",
      title: "Portfolio Optimization Workshop",
      date: new Date(2025, 9, 25),
      location: "Lab 205",
      participants: 15,
      category: "Quant"
    },
  ];

  // Filter events for selected date
  const selectedDateEvents = selectedDate 
    ? events.filter(event => 
        event.date.toDateString() === selectedDate.toDateString()
      )
    : [];

  // Get upcoming events (next 5)
  const upcomingEvents = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  // Dates with events for calendar highlighting
  const eventDates = events.map(event => event.date);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-center">
        <h2 className="text-white uppercase tracking-wider">Event Calendar</h2>
      </div>

      <div className="space-y-6">
        {/* Calendar - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl bg-zinc-950 p-6 md:p-8 border border-white/10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-white/5">
              <CalendarIcon className="w-5 h-5 text-zinc-400" />
            </div>
            <h3 className="text-white">Select a Date</h3>
          </div>
          
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border-0"
              modifiers={{
                hasEvent: eventDates,
              }}
              modifiersClassNames={{
                hasEvent: "text-yellow-600 font-medium hover:text-yellow-500",
              }}
            />
          </div>

          {selectedDateEvents.length > 0 && (
            <div className="mt-8 space-y-3 max-w-2xl mx-auto">
              <p className="text-zinc-400 text-center">Events on {selectedDate?.toLocaleDateString()}:</p>
              {selectedDateEvents.map(event => (
                <div
                  key={event.id}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 text-center"
                >
                  <h4 className="text-white mb-2">{event.title}</h4>
                  <div className="flex items-center justify-center gap-4 text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </div>
                    {event.participants && (
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>{event.participants} participants</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Upcoming Events List - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl bg-zinc-950 p-6 md:p-8 border border-white/10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-white/5">
              <CalendarIcon className="w-5 h-5 text-zinc-400" />
            </div>
            <h3 className="text-white">Upcoming Events</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-600/30 hover:bg-white/10 transition-all duration-300 cursor-pointer group text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-zinc-500">
                    {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                    {event.category}
                  </span>
                </div>
                <h4 className="text-white mb-2 group-hover:text-yellow-600 transition-colors">
                  {event.title}
                </h4>
                <div className="flex items-center justify-center gap-3 text-zinc-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                  {event.participants && (
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{event.participants}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
