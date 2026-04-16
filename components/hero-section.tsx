"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "회사소개", href: "#about" },
  { label: "인증현황", href: "#cert" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "멀티미디어", href: "#media" },
];

const BACKGROUND_IMAGES = [
  "/assets/background_img/main-visual1.jpg",
  "/assets/background_img/main-visual2.jpg",
  "/assets/background_img/main-visual3.jpg",
  "/assets/background_img/main-visual4.jpg",
];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden isolate">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <motion.img
              src={BACKGROUND_IMAGES[index]}
              alt={`Misawell Background ${index + 1}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Header / Navigation */}
      <header className="relative z-50 py-6 px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - User can replace later */}
          <div className="text-white font-serif text-2xl font-bold tracking-tighter">
            사단법인 아름다운사람들
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 ring-1 ring-white/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            className="ml-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
          >
            견적문의
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full -mt-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur"
        >
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Social Enterprise
          </span>
          <span className="w-px h-3 bg-white/20" />
          <span className="text-xs font-medium text-white/80">
            아름다운사람들
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8"
        >
          상상이 가치가 되는
          <br />
          아름다운 세상
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-white/70 max-w-2xl text-lg mb-12"
        >
          디자인, 인쇄, 출판 전문 사회적기업으로서 사람과 자연을 생각하는 가치 있는 결과물을 만듭니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/15 backdrop-blur transition-all flex items-center gap-3 group">
            포트폴리오 보기
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-transparent hover:text-white text-white/80 transition-all flex items-center gap-3">
            <Play className="w-4 h-4 text-orange-400" />
            회사 소개
          </button>
        </motion.div>
      </div>

      {/* Bottom Partners Indicator - User can customize */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex flex-col items-center">
        <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-6">
          Partnering with leading organizations
        </p>
        <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="h-6 w-24 bg-white/20 rounded" />
          <div className="h-6 w-24 bg-white/20 rounded" />
          <div className="h-6 w-24 bg-white/20 rounded" />
          <div className="h-6 w-24 bg-white/20 rounded" />
          <div className="h-6 w-24 bg-white/20 rounded" />
        </div>
      </div>
    </section>
  );
}
