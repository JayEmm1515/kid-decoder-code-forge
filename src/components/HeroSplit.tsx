import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HeroSplit() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[28px] overflow-hidden" style={{ boxShadow: 'var(--shadow-clay-lg)' }}>
          {/* Left – Slate panel */}
          <motion.div
            className="card-clay-slate flex flex-col justify-center p-8 md:p-12 lg:p-14 relative"
            style={{ borderRadius: 0 }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">
              The Kid Decoder
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Decode Your Child's Behavior
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Evidence-based tools and guides to help you understand what's really going on,
              respond with confidence, and build a stronger connection.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <Link to="/emotional-blueprint" className="btn-secondary text-base">
                <Star className="w-5 h-5" />
                Start Assessment
              </Link>
              <Link to="/behaviour-guides" className="btn-outline text-base !border-white/30 !text-white hover:!bg-white/10">
                Explore Guides
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right – Peach panel with abstract clay shapes */}
          <div
            className="relative flex items-center justify-center p-8 md:p-12 lg:p-14 min-h-[320px] lg:min-h-0"
            style={{
              background: 'linear-gradient(145deg, hsl(8 56% 88%) 0%, hsl(8 56% 82%) 100%)',
            }}
          >
            {/* Clay sphere 1 */}
            <div
              className="clay-sphere w-32 h-32 md:w-40 md:h-40 animate-float"
              style={{
                background: 'radial-gradient(circle at 35% 35%, hsl(8 56% 90%), hsl(8 56% 72%))',
                top: '15%', left: '10%',
                boxShadow: '0 8px 32px rgba(231,167,156,0.4), inset 0 -4px 12px rgba(0,0,0,0.06)',
                opacity: 0.8,
              }}
            />
            {/* Clay sphere 2 */}
            <div
              className="clay-sphere w-20 h-20 md:w-24 md:h-24 animate-float"
              style={{
                background: 'radial-gradient(circle at 30% 30%, hsl(213 20% 55%), hsl(213 20% 33%))',
                bottom: '20%', right: '15%',
                boxShadow: '0 6px 24px rgba(66,84,102,0.3), inset 0 -3px 8px rgba(0,0,0,0.1)',
                animationDelay: '1.5s',
                opacity: 0.7,
              }}
            />
            {/* Clay pill */}
            <div
              className="clay-pill w-24 h-10 md:w-32 md:h-12 animate-float"
              style={{
                background: 'linear-gradient(145deg, hsl(0 0% 100% / 0.6), hsl(8 56% 92% / 0.6))',
                top: '55%', left: '50%',
                boxShadow: '0 4px 16px rgba(231,167,156,0.25), inset 0 1px 2px rgba(255,255,255,0.5)',
                animationDelay: '0.8s',
                transform: 'rotate(-12deg)',
                opacity: 0.6,
              }}
            />
            {/* Small sphere */}
            <div
              className="clay-sphere w-12 h-12 animate-float"
              style={{
                background: 'radial-gradient(circle at 40% 35%, hsl(0 0% 100% / 0.9), hsl(210 18% 90%))',
                top: '25%', right: '25%',
                boxShadow: '0 4px 12px rgba(31,41,55,0.08)',
                animationDelay: '2.2s',
                opacity: 0.7,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
