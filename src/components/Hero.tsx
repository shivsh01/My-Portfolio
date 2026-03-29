"use client";

import { motion } from "framer-motion";
import { HERO_DATA } from "@/config/data";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10"
      >
        <p className="text-lg md:text-2xl text-secondary font-medium mb-4 font-mono">
          {HERO_DATA.greet}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold tracking-tight text-foreground mb-4">
          {HERO_DATA.title}
        </h1>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
            {HERO_DATA.generalBtn.map((btn, idx) => (
                <span key={idx} className="text-sm md:text-base text-secondary bg-white/10 transparent font-mono px-4 py-1 border border-border rounded-full">
                    {btn.label}
                </span>
            ))}
        </div>
        <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          {HERO_DATA.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={HERO_DATA.ctaPrimary.href}
            className="bg-primary text-background px-8 py-3.5 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-[0_0_15px_var(--color-primary)] opacity-90"
          >
            {HERO_DATA.ctaPrimary.label}
          </a>
          <a
            href={HERO_DATA.ctaSecondary.href}
            className="text-secondary px-8 py-3.5 rounded-full font-medium hover:text-foreground transition-all underline decoration-border hover:decoration-foreground underline-offset-8"
          >
            {HERO_DATA.ctaSecondary.label}
          </a>
        </div>
        <div>
            <ul className="flex gap-6 justify-center mt-12 ">
                {HERO_DATA.social.map((social, idx) => (
                    <li key={idx}>
                        <a href={social.href} className="inline-block hover:scale-125 transition-transform duration-300 text-secondary hover:text-foreground">
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
