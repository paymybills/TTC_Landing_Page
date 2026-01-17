"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(logoRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 1.5,
                ease: "power2.out",
            });

            gsap.from(textRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                delay: 0.5,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-black"
        >
            {/* Background radial gradient simulating a spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ttc-darkgray/40 via-black to-black z-0 pointer-events-none" />

            <div className="z-10 relative flex flex-col items-center gap-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 glow-gold p-4 bg-black/50 backdrop-blur-md">
                    <Image
                        ref={logoRef}
                        src="/assets/logo.png"
                        alt="The Turing Circle Logo"
                        fill
                        className="object-contain p-2"
                        priority
                    />
                </div>

                <div className="text-center space-y-4">
                    <h1 ref={textRef} className="text-4xl md:text-7xl font-bold tracking-tighter text-white">
                        The Turing <span className="text-ttc-gold">Circle</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-lg mx-auto">
                        Mathematics. Deep Learning. Quant. Game Theory.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
            </div>
        </section>
    );
}
