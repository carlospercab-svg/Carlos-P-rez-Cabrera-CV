import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H1, Body, Button } from "@/components/ui"; // Assuming index export, otherwise direct import
import { PROFILE } from "@/data/profile";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <Section className="min-h-screen flex flex-col justify-center pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-mono border border-asphalt/10 rounded-full text-grey-apple bg-white/50 backdrop-blur-sm">
            {PROFILE.role}
          </span>
        </motion.div>

        <H1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 whitespace-pre-line"
        >
          {PROFILE.hero.headline}
        </H1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-12"
        >
          <Body>{PROFILE.hero.subheadline}</Body>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="#projects">{PROFILE.hero.ctaPrimary}</Button>
          <Button variant="secondary" href="#contact">
            {PROFILE.hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      {/* Profile Image (Desktop: Right Side, Mobile: Hidden/Subtle) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-0 bg-surface-dark"
      >
         <div className="absolute inset-0 bg-gradient-to-t from-asphalt/80 via-transparent to-transparent z-10"></div>
         {/* Fallback text if image fails */}
         <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono uppercase tracking-widest z-0">
            Profile Image
         </div>
         <img 
           src="/images/profile.jpg" 
           alt="Carlos Pérez Cabrera" 
           className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
           onError={(e) => {
             e.currentTarget.style.display = 'none';
           }}
         />
      </motion.div>

      {/* Abstract Background Element - Subtle Noise/Gradient */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-border/30 to-transparent blur-3xl -z-10 opacity-50 pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-grey-apple/50"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </Section>
  );
};
