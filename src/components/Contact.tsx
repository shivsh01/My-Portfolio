"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CONTACT_DATA, SITE_CONFIG } from "@/config/data";

// TODO: Replace with your real Web3Forms access key (free at https://web3forms.com).
// Until this is set, the form falls back to a mailto: link so it's never a dead form.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const isConfigured = WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Fallback: no key configured yet → open the user's mail client.
    if (!isConfigured) {
      const subject = encodeURIComponent(`Portfolio message from ${data.name || "someone"}`);
      const body = encodeURIComponent(`${data.message || ""}\n\n— ${data.name || ""} (${data.email || ""})`);
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...data }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border border-border rounded-2xl px-6 py-4 text-foreground placeholder:text-secondary focus:outline-none focus:border-primary transition-colors focus:bg-accent/50";

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
            <p className="text-secondary text-sm font-mono tracking-widest uppercase mb-4">(CONTACT)</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground tracking-tight">
              {CONTACT_DATA.titlePrefix}{" "}
              <span className="text-primary font-normal">{CONTACT_DATA.titleHighlight}</span>{" "}
              {CONTACT_DATA.titleSuffix}
            </h2>
            <p className="text-secondary text-lg">{CONTACT_DATA.subtitle}</p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-block mt-6 font-mono text-sm text-secondary hover:text-primary transition-colors"
            >
              {SITE_CONFIG.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder={CONTACT_DATA.form.namePlaceholder} className={inputClass} required />
              <input type="email" name="email" placeholder={CONTACT_DATA.form.emailPlaceholder} className={inputClass} required />
              <textarea name="message" placeholder={CONTACT_DATA.form.messagePlaceholder} rows={5} className={`${inputClass} resize-none`} required />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-primary text-background px-8 py-4 rounded-full font-bold w-max hover:bg-primary/90 transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : CONTACT_DATA.form.buttonText}
              </button>

              {status === "success" && (
                <p className="text-primary text-sm font-mono">Thanks — your message was sent. I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm font-mono">Something went wrong. Please email me directly at {SITE_CONFIG.email}.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
