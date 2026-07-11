"use client";

import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG, NAV_LINKS } from "@/config/data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderNavLink = (
    link: { label: string; href: string; external?: boolean },
    onClick?: () => void
  ) =>
    link.external ? (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="hover:text-foreground transition-colors"
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.label}
        href={link.href}
        onClick={onClick}
        className="hover:text-foreground transition-colors"
      >
        {link.label}
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md py-4 border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex flex-col group" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center gap-2">
            <span className="text-primary">
              <Code2 size={22} />
            </span>
            <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
              {SITE_CONFIG.logoText}
            </span>
          </div>
          <span className="text-secondary text-[11px] font-mono ml-8 tracking-wide">
            {SITE_CONFIG.role}
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm font-mono text-secondary">
          {NAV_LINKS.map((link) => renderNavLink(link))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="hidden md:block border border-border text-foreground px-5 py-2 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Contact me
          </a>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6 text-sm font-mono text-secondary">
            {NAV_LINKS.map((link) => renderNavLink(link, () => setMenuOpen(false)))}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              onClick={() => setMenuOpen(false)}
              className="text-primary hover:text-foreground transition-colors"
            >
              Contact me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
