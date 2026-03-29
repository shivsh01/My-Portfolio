"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE_CONFIG, NAV_LINKS } from "@/config/data";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur py-4 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <span className="text-primary"><Code2 size={24} /></span>
            <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-secondary transition-colors">{SITE_CONFIG.logoText}</span>
          </div>
          <span className="text-secondary text-xs font-medium ml-8">{SITE_CONFIG.role}</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-secondary">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="hidden md:block border border-border text-foreground px-6 py-2 rounded-full text-sm font-medium hover:border-foreground transition-colors"
          >
            Contact me
          </a>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-full border border-border bg-accent hover:border-foreground transition-all text-foreground flex gap-2 items-center"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <>
                  <div className="bg-primary rounded-full p-1"><Moon size={14} className="text-background" /></div>
                  <div className="p-1"><Sun size={14} className="text-secondary" /></div>
                </>
              ) : (
                <>
                  <div className="p-1"><Moon size={14} className="text-secondary" /></div>
                  <div className="bg-primary rounded-full p-1"><Sun size={14} className="text-background" /></div>
                </>
              )
            ) : <div className="w-12 h-6" />}
          </button>
          
          <button className="md:hidden text-foreground p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
