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
          <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-4">
            {TECH_STACK_DATA.heading}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {TECH_STACK_DATA.title} <span className="text-primary">{TECH_STACK_DATA.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {TECH_STACK_DATA.categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-foreground font-bold text-lg border-b border-border pb-2">
                {category.name}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2 group transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">
                    <div className="w-6 h-6 rounded-lg bg-accent border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
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
