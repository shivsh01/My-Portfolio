"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { WORK_EXPERIENCE_DATA } from "@/config/data";

export function Experience() {
  

  return (
    <section id="experience" className="py-20 md:py-4 bg-background relative">
      <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <p className="text-secondary text-sm font-bold tracking-widest uppercase mb-4">Experience</p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
            >
              Where I've <span className="text-primary">Worked</span>
            </motion.h2>
          </div>
          
          <div className="relative w-full overflow-x-auto pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-6 w-max pb-12 relative pt-2 pr-4 md:pr-12">
              
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-border/60" />
              
              {WORK_EXPERIENCE_DATA.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="w-[400px] md:w-[450px] flex-shrink-0 relative group"
                >
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_var(--color-primary)] z-10 transition-transform group-hover:scale-125 duration-300" />
                  
                  <div className="bg-accent/30 border border-border hover:border-primary/50 transition-colors duration-300 rounded-2xl p-6 md:p-7 flex flex-col w-full h-full mb-10">
                    <div className="absolute top-6 right-6 text-secondary text-xs font-mono font-bold tracking-wider">
                      {job.id}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${job.logoBg} ${job.logoColor}`}>
                        {job.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 group/link cursor-pointer">
                          <h3 className="text-base font-semibold text-foreground transition-colors group-hover/link:text-primary">{job.company}</h3>
                          <ExternalLink size={16} className="text-secondary group-hover/link:text-primary transition-colors" />
                        </div>
                        <p className="text-secondary text-xs mt-1">{job.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {job.type}
                      </span>
                      <span className="text-secondary text-xs font-medium">{job.date}</span>
                    </div>

                    <ul className="space-y-2 flex-grow">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-secondary text-xs leading-relaxed">
                          <span className="block mt-2 rounded-full w-2 h-2 bg-primary/70 shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                       {job.tags.map(tag => (
                         <span key={tag} className="text-xs px-3 py-1 rounded-md bg-accent text-secondary border border-border/80">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
