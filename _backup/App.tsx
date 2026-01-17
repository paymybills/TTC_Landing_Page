import { Header } from "./components/Header";
import { DomainCardNew } from "./components/DomainCardNew";
import { motion } from "motion/react";
import { Mail, Info } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="container mx-auto px-6 py-12 space-y-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-12 pb-8 text-center space-y-6"
        >
          <h1 className="text-white tracking-tight">
            Welcome to The Turing Circle
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            MIT Manipal's premier mathematics and computing
            club, exploring the cutting edge of research in deep
            learning, quantitative analysis, and game theory.
          </p>
        </motion.section>

        {/* Research Domains Section */}
        <section
          id="domains"
          className="space-y-8 scroll-mt-24"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-white uppercase tracking-wider">
              Research Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DomainCardNew
              category="AI & Vision"
              title="Deep Learning & Computer Vision"
              description="Neural networks, image recognition, and advanced ML algorithms for visual understanding"
              gradientFrom="#D4AF37"
              gradientTo="#B8860B"
              image="https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NzY2MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              delay={0.2}
            />

            <DomainCardNew
              category="Financial Engineering"
              title="Quantitative Analysis"
              description="Algorithmic trading, risk modeling, portfolio optimization, and market analytics"
              gradientFrom="#D4AF37"
              gradientTo="#B8860B"
              image="https://images.unsplash.com/photo-1754304342484-3256d59778e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljYWwlMjBlcXVhdGlvbnMlMjBjaGFydHN8ZW58MXx8fHwxNzU5ODEyODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              delay={0.3}
            />

            <DomainCardNew
              category="Strategic Computing"
              title="Game Theory & Optimization"
              description="Decision theory, strategic optimization, computational strategies, and resource allocation"
              gradientFrom="#D4AF37"
              gradientTo="#B8860B"
              image="https://images.unsplash.com/photo-1662169847892-565cce8f901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMHN0cmF0ZWd5JTIwZ2FtZXxlbnwxfHx8fDE3NTk4MTI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              delay={0.4}
            />
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="space-y-6 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-zinc-950 p-8 md:p-12 border border-white/10"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <Info className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-white uppercase tracking-wider">
                About Us
              </h2>
            </div>
            <div className="space-y-4 text-zinc-400 max-w-3xl mx-auto text-center">
              <p>
                MIT Manipal's premier math and computing club,
                delving head first into the mathematics behind
                game theory, machine learning, and quantitative
                analysis.
              </p>
              <p>
                We bring together passionate students,
                researchers, and industry professionals to
                explore the frontiers of computational
                mathematics, fostering innovation and excellence
                in theoretical and applied research.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact Us Section */}
        <section
          id="contact"
          className="space-y-6 scroll-mt-24 pb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-zinc-950 p-8 md:p-12 border border-white/10"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <Mail className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-white uppercase tracking-wider">
                Contact Us
              </h2>
            </div>
            <div className="space-y-4 text-center">
              <p className="text-zinc-400">
                Have questions or want to get involved? Reach
                out to us!
              </p>
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 w-fit mx-auto">
                <Mail className="w-5 h-5 text-yellow-600" />
                <span className="text-white">
                  Math Department
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Subtle decorative gradient orbs - golden theme */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
}