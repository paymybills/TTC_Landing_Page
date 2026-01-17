"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { TrendingUp, Gamepad2, Cpu, ChevronDown, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * THE TURING CIRCLE - WEBSITE
 * Stack: React, Tailwind CSS, Framer Motion
 * Theme: Void Black (#050505), Apple White (#F5F5F7), Metallic Gold
 */

// --- DATA ---

const TEAM_MEMBERS = [
    { name: "Adisha Sahoo", role: "President", domain: "Lead", img: "https://ui-avatars.com/api/?name=Adisha+Sahoo&background=050505&color=D4AF37" },
    { name: "Ankur Kumar", role: "Vice President", domain: "Lead", img: "https://ui-avatars.com/api/?name=Ankur+Kumar&background=050505&color=D4AF37" },
    { name: "Aniruddha Roy", role: "Head of ML", domain: "Deep Learning", img: "https://ui-avatars.com/api/?name=Aniruddha+Roy&background=050505&color=D4AF37" },
    { name: "Aravinthakshan", role: "Head of ML", domain: "Deep Learning", img: "https://ui-avatars.com/api/?name=Aravinthakshan&background=050505&color=D4AF37" },
    { name: "Ananya Sahani", role: "Head of Game Theory", domain: "Game Theory", img: "https://ui-avatars.com/api/?name=Ananya+Sahani&background=050505&color=D4AF37" },
    { name: "Rijul Kaushik", role: "Head of PR & SMGD", domain: "Operations", img: "https://ui-avatars.com/api/?name=Rijul+Kaushik&background=050505&color=D4AF37" },
    { name: "Pavitra Parth", role: "Head of HR", domain: "Human Relations", img: "https://ui-avatars.com/api/?name=Pavitra+Parth&background=050505&color=D4AF37" },
];

const DOMAINS = [
    {
        id: "dl",
        title: "Deep Learning",
        icon: <Cpu size={40} />,
        description: "We find ourselves at the intersection of Math, Deep Learning, and Computer Vision. Exploring the architecture of intelligence through neural networks and stochastic processes.",
        theme: "dark", // Black background
        keywords: ["Math", "Deep Learning", "Computer Vision", "Intelligence"]
    },
    {
        id: "quant",
        title: "Quant",
        icon: <TrendingUp size={40} />,
        description: "An up and coming domain for our club. Financial Engineering meets algorithmic trading. We apply advanced calculus and probability to decode market dynamics.",
        theme: "light", // White background overlay
        keywords: ["Quant", "Financial Engineering", "Algorithmic", "Probability"]
    },
    {
        id: "gt",
        title: "Game Theory",
        icon: <Gamepad2 size={40} />,
        description: "Analyzing mathematical models of strategic interaction. From Nash Equilibrium to real-world negotiation, we study how math defines conflict and cooperation in life.",
        theme: "dark", // Black background
        keywords: ["Game Theory", "Strategic", "Nash Equilibrium", "Life"]
    }
];

// --- COMPONENTS ---

// 1. Mouse Follower Effect
const CursorHighlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`
            }}
        />
    );
};

// 2. Text Highlighter Helper
const HighlightText = ({ text, keywords, isDark }: { text: string; keywords?: string[]; isDark: boolean }) => {
    if (!keywords || keywords.length === 0) return <span>{text}</span>;

    // Create a regex to match keywords case-insensitively
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, i) => {
                const isMatch = keywords.some(k => k.toLowerCase() === part.toLowerCase());
                return isMatch ? (
                    <span key={i} className={`font-bold ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600' : 'text-black font-extrabold underline decoration-yellow-500 decoration-4 underline-offset-4'}`}>
                        {part}
                    </span>
                ) : (
                    <span key={i} className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>{part}</span>
                );
            })}
        </span>
    );
};

// 3. Navigation
const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                {/* Placeholder for Logo */}
                <span className="text-black font-bold font-mono">T</span>
            </div>
            <span className="font-bold tracking-tight text-lg hidden sm:block">The Turing Circle</span>
        </div>
        <div className="flex gap-6 text-sm font-mono tracking-widest uppercase">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#domains" className="hover:text-yellow-400 transition-colors">Domains</a>
            <a href="#team" className="hover:text-yellow-400 transition-colors">Team</a>
        </div>
    </nav>
);

// 4. Hero Section
const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <motion.div
                style={{ y: y1, opacity }}
                className="z-10 text-center px-4 max-w-5xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-4 flex items-center justify-center gap-3"
                >
                    <span className="px-3 py-1 border border-yellow-500/30 rounded-full text-yellow-500 text-xs font-mono tracking-widest uppercase bg-yellow-500/10 backdrop-blur-md">
                        Student Run Club
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
                >
                    The Turing <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-700">
                        Circle
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-neutral-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed flex flex-col gap-2"
                >
                    <p>MIT Manipal</p>
                    <p className="text-sm md:text-base text-neutral-500 font-mono opacity-80">
                        From the Department of Mathematics
                    </p>
                    <p className="mt-2">
                        Where <span className="text-white">Math</span> meets <span className="text-white">Computing</span>.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <ChevronDown />
            </motion.div>
        </div>
    );
};

// 5. Domain Section (The Apple Effect)
const DomainSection = ({ data }: { data: typeof DOMAINS[0] }) => {
    const isLight = data.theme === 'light';

    return (
        <section className={`relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden ${isLight ? 'bg-[#F5F5F7] text-black' : 'bg-[#050505] text-white'}`}>
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, margin: "-100px" }}
                >
                    <div className={`mb-6 p-4 rounded-2xl w-fit ${isLight ? 'bg-black/5 text-black' : 'bg-white/5 text-yellow-500'}`}>
                        {data.icon}
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        {data.title}
                    </h2>
                    <p className="text-xl md:text-3xl font-light leading-relaxed">
                        <HighlightText text={data.description} keywords={data.keywords} isDark={!isLight} />
                    </p>
                </motion.div>

                {/* Visual Element (Abstract Representation) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: false }}
                    className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-opacity-20 flex items-center justify-center"
                >
                    {/* Abstract background specific to domain */}
                    <div className={`absolute inset-0 ${isLight ? 'bg-gradient-to-br from-gray-200 to-white' : 'bg-gradient-to-br from-neutral-900 to-black'}`}></div>

                    {/* Decorative Elements */}
                    {data.id === 'dl' && (
                        <div className="grid grid-cols-6 gap-2 opacity-30">
                            {[...Array(36)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
                                    className="w-2 h-2 rounded-full bg-yellow-500"
                                />
                            ))}
                        </div>
                    )}

                    {data.id === 'quant' && (
                        <div className="relative w-full h-full p-10">
                            <svg viewBox="0 0 200 100" className="w-full h-full stroke-black fill-none stroke-2">
                                <motion.path
                                    d="M0,100 Q50,0 100,50 T200,0"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </svg>
                        </div>
                    )}

                    {data.id === 'gt' && (
                        <div className="flex gap-4">
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-16 h-16 border-2 border-yellow-500 rounded-lg" />
                            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-16 h-16 bg-neutral-800 rounded-full" />
                        </div>
                    )}

                </motion.div>
            </div>
        </section>
    );
};

// 6. Projects Call to Action
const ProjectsSection = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-neutral-900/50 relative z-10 border-t border-neutral-900">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-yellow-500 font-mono tracking-widest text-sm uppercase mb-4 block">Flagship Content</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Projects & Working</h2>
                    <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Explore our flagship content, interactive simulations, and deep dives into the world of mathematics and computing.
                    </p>
                    <a
                        href="https://ttcprojects.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase rounded-full hover:border-yellow-500 transition-all duration-300 overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-yellow-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span className="relative group-hover:text-black transition-colors z-10">Launch Project View</span>
                        <TrendingUp className="relative group-hover:text-black transition-colors z-10 w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

// 7. Team Section
const TeamCard = ({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-neutral-900 border border-neutral-800 transition-all duration-300 group-hover:border-yellow-600/50">
                <div className="absolute inset-0 bg-neutral-800 animate-pulse" /> {/* Placeholder loading state */}
                <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 w-full p-6">
                    <p className="text-yellow-500 text-xs font-mono tracking-widest uppercase mb-1">{member.role}</p>
                    <h3 className="text-white text-xl font-bold">{member.name}</h3>
                    <p className="text-neutral-500 text-sm mt-1">{member.domain}</p>
                </div>
            </div>
        </motion.div>
    );
};

// --- MAIN APP ---

export default function App() {
    return (
        <div className="bg-[#050505] min-h-screen text-neutral-200 selection:bg-yellow-500/30 selection:text-yellow-200 font-sans">
            <CursorHighlight />
            <Navbar />

            <main>
                <Hero />

                {/* About Blurb */}
                <section id="about" className="py-32 px-6 flex justify-center bg-[#050505] relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl text-center"
                    >
                        <h3 className="text-2xl md:text-4xl font-light leading-normal text-neutral-300">
                            We are the <span className="text-yellow-500 font-medium">Mathematics Department&apos;s</span> premier tech club.
                            Bridging the gap between pure mathematics and modern computing technologies.
                        </h3>
                    </motion.div>
                </section>

                {/* Domains - Sticky/Stacked Effect */}
                <div id="domains" className="relative z-20">
                    {DOMAINS.map((domain, i) => (
                        <DomainSection key={i} data={domain} />
                    ))}
                </div>

                <ProjectsSection />

                {/* Team */}
                <section id="team" className="py-32 px-6 bg-[#050505] relative z-10 border-t border-neutral-900">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mb-16 text-center"
                        >
                            <h2 className="text-5xl font-bold mb-4 text-white">The Core</h2>
                            <p className="text-neutral-400">The minds behind the circle.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {TEAM_MEMBERS.map((member, index) => (
                                <TeamCard key={index} member={member} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black py-20 px-6 border-t border-neutral-900 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">The Turing Circle</h2>
                        <p className="text-neutral-500">MIT Manipal</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="https://www.linkedin.com/company/the-turing-circle" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com/the_turing_circle/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="mailto:theturingcircle.mit@manipal.edu" className="text-neutral-400 hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-10 pt-10 border-t border-neutral-900 text-center text-neutral-600 text-sm">
                    © {new Date().getFullYear()} The Turing Circle. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
