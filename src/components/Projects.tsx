"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PROJECTS_DATA, PROJECTS_FILTERS } from "@/config/data";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.type === filter);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            My <span className="font-mono text-secondary font-normal">{`{dev}`}</span> projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-lg mb-10"
          >
            From Web Apps to Websites & Platforms
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-16"
          >
            {/* {PROJECTS_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === f 
                    ? "bg-primary text-background" 
                    : "bg-accent text-secondary hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))} */}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="w-full h-48 bg-accent rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center border border-border">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-secondary font-mono text-sm">
                    [ Project Screenshot ]
                  </div>
                )}
              </div>
              <p className="text-secondary text-xs font-mono mb-3">{project.tech}</p>
              <h3 className="text-foreground text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-secondary mb-6 text-sm leading-relaxed min-h-[60px]">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a href={project.live} className="border border-primary text-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-background transition-colors">
                  See live
                </a>
                <a href={project.github} className="text-secondary px-5 py-2 rounded-full text-sm font-medium hover:text-foreground underline decoration-border hover:decoration-foreground transition-all underline-offset-4">
                  See on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
