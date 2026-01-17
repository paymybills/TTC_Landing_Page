"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface DomainSectionProps {
    id: string;
    title: string;
    description: string;
    alignment?: "left" | "right";
    highlightColor?: string;
    domainName: string; // Used for identifying special words
}

export default function DomainSection({
    id,
    title,
    description,
    alignment = "left",
    domainName
}: DomainSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Text Reveal Animation
            const text = textRef.current;
            if (text) {
                gsap.fromTo(text,
                    { color: "#333333" }, // Dimmed
                    {
                        color: "#F5F5F5", // White
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center py-20 relative border-t border-white/5"
        >
            <div className={cn(
                "container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                alignment === "right" ? "md:grid-flow-row-dense" : ""
            )}>
                {/* Text Overlay */}
                <div className={cn(alignment === "right" ? "md:col-start-2" : "md:col-start-1")}>
                    <h2 className="text-5xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-ttc-gold to-white opacity-90">
                        {title}
                    </h2>
                    <div className="relative">
                        <p
                            ref={textRef}
                            className="text-2xl md:text-4xl font-medium leading-relaxed tracking-wide transition-colors"
                        >
                            {description.split(" ").map((word, i) => {
                                // Simple highlighting logic
                                const isHighlight = [domainName, "Math", "Computing", "Vision", "Life"].some(k => word.toLowerCase().includes(k.toLowerCase()));
                                return (
                                    <span key={i} className={isHighlight ? "text-ttc-gold" : ""}>
                                        {word}{" "}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                </div>

                {/* Visual/Image Placeholder - Could be 3D element or Abstract Art */}
                <div className={cn(
                    "h-[400px] w-full rounded-2xl bg-gradient-to-br from-ttc-darkgray to-black border border-white/10 flex items-center justify-center group overflow-hidden relative",
                    alignment === "right" ? "md:col-start-1" : "md:col-start-2"
                )}>
                    <div className="absolute inset-0 bg-ttc-gold/5 group-hover:bg-ttc-gold/10 transition-colors duration-500" />
                    <span className="text-white/20 text-9xl font-bold select-none group-hover:scale-110 transition-transform duration-700">
                        {title.charAt(0)}
                    </span>
                </div>
            </div>
        </section>
    );
}
