"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Domains", href: "#domains" },
        { name: "Team", href: "#team" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent mix-blend-difference"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative overflow-hidden rounded-full border border-white/10 bg-black">
                    <img
                        src="/ttc-logo.png"
                        alt="The Turing Circle"
                        className="w-full h-full object-cover mix-blend-screen scale-110"
                    />
                </div>
                <span className="font-bold tracking-tight text-lg text-white hidden sm:block">The Turing Circle</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-mono tracking-widest uppercase text-neutral-300 hover:text-yellow-400 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://ttcprojects.vercel.app/"
                    className="px-5 py-2 border border-yellow-500 text-yellow-500 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-yellow-500 hover:text-black transition-all"
                >
                    Our Projects
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(true)}
            >
                <Menu size={28} />
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            className="absolute top-6 right-6 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://ttcprojects.vercel.app/"
                            className="px-8 py-3 bg-yellow-500 text-black rounded-full text-lg font-bold tracking-widest uppercase"
                        >
                            Our Projects
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
