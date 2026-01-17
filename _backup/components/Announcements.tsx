import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const announcements = [
  {
    id: "1",
    title: "💡 Weekly ML Paper Reading",
    content: "Every Friday 5 PM - Join us for deep dives into cutting-edge machine learning research papers. This week: Transformers and Attention Mechanisms.",
  },
  {
    id: "2",
    title: "💡 Quant Trading Workshop",
    content: "Saturday 2 PM - Learn algorithmic trading strategies and risk management from industry professionals. Bring your laptop!",
  },
  {
    id: "3",
    title: "💡 Game Theory Tournament",
    content: "Next Monday 6 PM - Test your strategic thinking in our multi-round game theory competition. Prizes for top performers!",
  },
];

export function Announcements() {
  return (
    <div className="rounded-2xl bg-[rgba(124,58,237,0.1)] backdrop-blur-lg border border-[rgba(139,92,246,0.25)] p-6 shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
      <h3 className="mb-4 bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
        Announcements
      </h3>
      <Accordion type="single" collapsible className="space-y-2">
        {announcements.map((announcement) => (
          <AccordionItem
            key={announcement.id}
            value={announcement.id}
            className="rounded-xl bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 border border-[rgba(139,92,246,0.3)] px-4 overflow-hidden"
          >
            <AccordionTrigger className="text-purple-100 hover:text-purple-50 py-3 hover:no-underline">
              {announcement.title}
            </AccordionTrigger>
            <AccordionContent className="text-purple-200 pb-3">
              {announcement.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
