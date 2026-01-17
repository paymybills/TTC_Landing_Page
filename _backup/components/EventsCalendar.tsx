import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock events for specific dates
const eventDates = [
  new Date(2025, 9, 10), // October 10
  new Date(2025, 9, 13), // October 13
  new Date(2025, 9, 17), // October 17
  new Date(2025, 9, 24), // October 24
];

const events = [
  { date: "Oct 10", title: "ML Workshop: Neural Networks", time: "5:00 PM" },
  { date: "Oct 13", title: "Quant Trading Seminar", time: "2:00 PM" },
  { date: "Oct 17", title: "Game Theory Competition", time: "6:00 PM" },
  { date: "Oct 24", title: "Guest Lecture: AI Ethics", time: "4:00 PM" },
];

export function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="rounded-2xl bg-[rgba(124,58,237,0.1)] backdrop-blur-lg border border-[rgba(139,92,246,0.25)] p-6 shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Events Calendar
        </h3>
        <button
          onClick={() => setDate(new Date())}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        >
          Today
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="calendar-wrapper">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-xl border-0 bg-[rgba(139,92,246,0.05)]"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center text-purple-200",
              caption_label: "text-purple-100",
              nav: "space-x-1 flex items-center",
              nav_button: "h-7 w-7 bg-[rgba(139,92,246,0.2)] hover:bg-[rgba(139,92,246,0.3)] text-purple-300 rounded-md transition-all",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-purple-300 rounded-md w-9 text-xs",
              row: "flex w-full mt-2",
              cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-purple-600/30 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal text-purple-200 hover:bg-[rgba(139,92,246,0.3)] hover:text-white rounded-md transition-all aria-selected:opacity-100",
              day_selected: "bg-purple-600 text-white hover:bg-purple-500 hover:text-white focus:bg-purple-600 focus:text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]",
              day_today: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50",
              day_outside: "text-purple-400/30 opacity-50",
              day_disabled: "text-purple-400/20",
              day_range_middle: "aria-selected:bg-purple-600/50 aria-selected:text-white",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: () => <ChevronLeft className="h-4 w-4" />,
              IconRight: () => <ChevronRight className="h-4 w-4" />,
            }}
          />
        </div>

        <div className="space-y-3">
          <h4 className="text-purple-300 mb-3">Upcoming Events</h4>
          {events.map((event, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 border border-[rgba(139,92,246,0.3)] hover:border-[rgba(139,92,246,0.5)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="text-purple-100">{event.title}</h5>
                  <p className="text-purple-300 text-sm mt-1">{event.date} • {event.time}</p>
                </div>
                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs">
                  Event
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
