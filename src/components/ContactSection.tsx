import { Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
    return (
        <footer id="contact" className="bg-black py-20 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-20 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Contact <span className="text-ttc-gold">Us</span></h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
                    <Link href="https://www.linkedin.com/company/the-turing-circle" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-ttc-gold transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <Linkedin size={24} />
                        </div>
                        <span className="text-lg">LinkedIn</span>
                    </Link>

                    <Link href="https://www.instagram.com/the_turing_circle/" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-ttc-gold transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <Instagram size={24} />
                        </div>
                        <span className="text-lg">Instagram</span>
                    </Link>

                    <Link href="mailto:theturingcircle.mit@manipal.edu" className="flex items-center gap-3 text-gray-400 hover:text-ttc-gold transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <Mail size={24} />
                        </div>
                        <span className="text-lg">theturingcircle.mit@manipal.edu</span>
                    </Link>
                </div>

                <div className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} The Turing Circle. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
