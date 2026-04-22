"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "회사소개", href: "/#about" },
  { label: "인증현황", href: "/certifications" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "멀티미디어", href: "/#media" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`relative z-50 py-6 px-6 lg:px-12 flex items-center justify-between ${!transparent ? "bg-background/80 backdrop-blur-md border-b border-white/5" : ""}`}>
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-white font-serif text-2xl font-bold tracking-tighter group-hover:text-blue-400 transition-colors">
            사단법인 아름다운사람들
          </div>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 ring-1 ring-white/10">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#inquiry"
          className="ml-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
        >
          견적문의
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </nav>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <button
          className="text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full py-4 bg-orange-500 text-white text-center font-bold rounded-xl"
            >
              견적문의
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
