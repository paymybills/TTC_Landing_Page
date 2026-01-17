import { Instagram, Menu } from "lucide-react";

export function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="tracking-wider text-white hover:text-yellow-600 transition-colors"
          >
            THE TURING CIRCLE
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-zinc-400 hover:text-yellow-600 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-zinc-400 hover:text-yellow-600 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/the_turing_circle/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 text-zinc-400 hover:text-yellow-600" />
          </a>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
            <Menu className="w-5 h-5 text-zinc-400" />
          </button>
        </div>
      </div>
    </header>
  );
}