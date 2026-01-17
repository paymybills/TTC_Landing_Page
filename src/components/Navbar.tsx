"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Deep Learning", href: "#deep-learning" },
        { name: "Quant", href: "#quant" },
        { name: "Game Theory", href: "#game-theory" },
        { name: "Projects", href: "https://ttcprojects.vercel.app/" },
        { name: "Team", href: "#team" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-8 flex justify-between items-center backdrop-blur-sm",
                scrolled ? "bg-black/80 border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="text-xl font-bold tracking-tighter text-ttc-white">
                <span className="text-ttc-gold">TTC</span>
            </div>

            <div className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-ttc-white/70 hover:text-ttc-gold transition-colors relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ttc-gold transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>
        </nav>
    );
}
