import { ExternalLink, BookOpen, Users, Calendar } from "lucide-react";

const links = [
  { icon: BookOpen, label: "Resources", href: "#" },
  { icon: Users, label: "Join Us", href: "#" },
  { icon: Calendar, label: "Events", href: "#" },
  { icon: ExternalLink, label: "Discord", href: "#" },
];

export function QuickLinks() {
  return (
    <div className="rounded-2xl bg-[rgba(124,58,237,0.1)] backdrop-blur-lg border border-[rgba(139,92,246,0.25)] p-6 shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
      <h3 className="mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
        Quick Links
      </h3>
      <div className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] hover:bg-[rgba(139,92,246,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 group"
            >
              <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
              <span className="text-purple-200 group-hover:text-purple-100">{link.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
