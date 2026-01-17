"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // Add hover effect listeners
        const handleHover = () => {
            gsap.to(cursor, { scale: 0.5 });
            gsap.to(follower, { scale: 3, opacity: 0.5, backgroundColor: "white", mixBlendMode: "difference" });
        };

        const handleHoverOut = () => {
            gsap.to(cursor, { scale: 1 });
            gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: "transparent", mixBlendMode: "normal" });
        };

        const links = document.querySelectorAll("a, button");
        links.forEach(link => {
            link.addEventListener("mouseenter", handleHover);
            link.addEventListener("mouseleave", handleHoverOut);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            links.forEach(link => {
                link.removeEventListener("mouseenter", handleHover);
                link.removeEventListener("mouseleave", handleHoverOut);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-ttc-gold rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-ttc-gold rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform"
            />
        </>
    );
}
