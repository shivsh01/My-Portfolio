"use client";

import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/config/data";

export function Projects() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary text-sm font-mono tracking-widest uppercase mb-4"
          >
            (PORTFOLIO)
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
          >
            My <span className="font-mono text-primary font-normal">{`{dev}`}</span> projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-lg mt-4"
          >
            From web apps to platforms & backends.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group flex flex-col"
            >
              <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden relative border border-border">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-accent via-background to-accent">
                    <span className="font-mono text-lg text-primary/80 tracking-tight">
                      {`</> ${project.title}`}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-secondary text-xs font-mono mb-3">{project.tech}</p>
              <h3 className="text-foreground text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-secondary mb-6 text-sm leading-relaxed grow">
                {project.description}
              </p>
              <div className="flex gap-4 items-center">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-primary text-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-background transition-colors"
                  >
                    See live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary px-1 py-2 rounded-full text-sm font-medium hover:text-foreground underline decoration-border hover:decoration-foreground transition-all underline-offset-4"
                >
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
