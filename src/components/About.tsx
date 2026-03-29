"use client";

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { ABOUT_TYPOGRAPHY, ABOUT_DATA } from "@/config/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-16 px-4 bg-background relative overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] left-[10%]">
          <Sparkle className="w-6 h-6 text-primary fill-primary" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-[40%] right-[15%]">
          <Sparkle className="w-8 h-8 text-primary fill-primary" />
        </motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute bottom-[25%] left-[20%]">
          <Sparkle className="w-5 h-5 text-primary fill-primary" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="absolute bottom-[15%] right-[25%]">
          <Sparkle className="w-4 h-4 text-primary fill-primary" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-secondary text-xs md:text-sm font-bold tracking-widest uppercase mb-12 md:mb-20"
        >
          {ABOUT_TYPOGRAPHY.sectionTitle}
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] font-bold text-foreground leading-[1.1] md:leading-[1.1] tracking-tight uppercase flex flex-col items-start"
        >
          <div className="flex flex-wrap gap-x-3 md:gap-x-6">
            <span>CRAFTING</span>
            <span>SOFTWARE</span>
          </div>
          
          <div className="flex flex-wrap gap-x-3 md:gap-x-6 mt-1 md:mt-2">
            <span>WITH</span>
            <span className="text-primary">PRECISION,</span>
          </div>

          <div className="flex flex-wrap gap-x-3 md:gap-x-6 mt-1 md:mt-2">
            <span className="text-primary">PURPOSE,</span>
            <span>AND</span>
          </div>

          <div className="flex flex-wrap gap-x-3 md:gap-x-6 mt-1 md:mt-2 items-center">
            <span className="flex items-center">
              PERF
              <span className="inline-flex items-center justify-center w-[0.8em] h-[0.8em] rounded-full bg-primary text-background mx-1 md:mx-2 lg:mx-3 shrink-0">
                 <Sparkle className="w-[45%] h-[45%] fill-background" />
              </span>
              RMANCE. 
            </span>
          </div>

        </motion.div>

         <div className="mt-32 md:mt-28 grid md:grid-cols-2 gap-12 lg:gap-24 items-start pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >

            <div className="space-y-10 border-l border-border/50 pl-6 ml-2 md:pl-8 md:ml-4">
              {ABOUT_DATA.experiences.map((exp, i) => (
                <div key={i} className="relative group">
                  <p className="text-secondary leading-relaxed">
                    <span className="font-bold text-foreground block mb-2 text-lg">{exp.title}</span>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end md:sticky md:top-32"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-accent to-background border border-border shadow-2xl flex items-center justify-center group pointer-events-none">
               <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
               <p className="text-secondary font-mono text-sm relative z-10">{ABOUT_DATA.photoAlt}</p>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
