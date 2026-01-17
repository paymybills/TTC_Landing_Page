"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
    name: string;
    role: string;
    image?: string;
}

const teamMembers: TeamMember[] = [
    { name: "Adisha Sahoo", role: "President" },
    { name: "Ankur Kumar", role: "Vice President" },
    { name: "Aniruddha Roy", role: "Head of ML" },
    { name: "Aravinthakshan", role: "Head of ML" },
    { name: "Ananya Sahani", role: "Head of Game Theory" },
    { name: "Rijul Kaushik", role: "Head of PR and SMGD" },
    { name: "Pavitra Parth", role: "Head of Human Relations" },
];

export default function TeamSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".team-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="team" className="min-h-screen py-20 px-6 md:px-20 bg-ttc-black relative">
            <div className="container mx-auto" ref={containerRef}>
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">The <span className="text-ttc-gold">Team</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="team-card group relative overflow-hidden rounded-xl bg-ttc-darkgray border border-white/5 p-6 hover:border-ttc-gold/30 transition-all duration-300">
                            <div className="aspect-square bg-black/40 rounded-lg mb-6 overflow-hidden relative">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 flex items-center justify-center text-ttc-gold/20 text-6xl font-bold group-hover:scale-110 transition-transform duration-500">
                                    {member.name.charAt(0)}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-ttc-gold transition-colors">{member.name}</h3>
                            <p className="text-sm text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
