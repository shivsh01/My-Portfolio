"use client";

import { motion } from "framer-motion";
import { TECH_STACK_DATA } from "@/config/data";

export function Skills() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-secondary text-sm font-mono tracking-widest uppercase mb-4">
            {TECH_STACK_DATA.heading}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            {TECH_STACK_DATA.title} <span className="text-primary">{TECH_STACK_DATA.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {TECH_STACK_DATA.categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start border-t border-border/60 pt-8 first:border-t-0 first:pt-0"
            >
              <h3 className="text-secondary font-mono text-sm tracking-wide pt-1">
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-foreground bg-accent border border-border rounded-md px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
