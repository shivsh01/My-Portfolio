"use client";

import { motion } from "framer-motion";
import { CONTACT_DATA } from "@/config/data";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-start">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-4 text-foreground tracking-tight">
              {CONTACT_DATA.titlePrefix} <span className="text-secondary font-normal">{CONTACT_DATA.titleHighlight}</span> {CONTACT_DATA.titleSuffix}
            </h2>
            <p className="text-secondary text-lg">
              {CONTACT_DATA.subtitle}
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="md:w-1/2 w-full"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder={CONTACT_DATA.form.namePlaceholder} 
                className="w-full bg-transparent border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors focus:bg-accent/30"
                required
              />
              <input 
                type="email" 
                placeholder={CONTACT_DATA.form.emailPlaceholder} 
                className="w-full bg-transparent border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors focus:bg-accent/30"
                required
              />
              <textarea 
                placeholder={CONTACT_DATA.form.messagePlaceholder} 
                rows={5}
                className="w-full bg-transparent border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors resize-none focus:bg-accent/30"
                required
              ></textarea>
              <button 
                type="submit" 
                className="bg-primary text-background px-8 py-4 rounded-full font-bold w-max hover:bg-primary/90 transition-colors mt-2"
              >
                {CONTACT_DATA.form.buttonText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
