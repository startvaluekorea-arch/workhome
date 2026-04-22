"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioCarouselProps {
  images: {
    cover: string;
    spread1: string;
    spread2: string;
  };
}

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    { type: "표지", src: images.cover },
    { type: "펼침면 1", src: images.spread1 },
    { type: "펼침면 2", src: images.spread2 },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // 자동 재생 설정 (2초 간격)
  React.useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[16/10] bg-zinc-50 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center p-8 md:p-16"
          >
            <img
              src={slides[currentIndex].src}
              alt={slides[currentIndex].type}
              className="max-w-full max-h-full object-contain rounded-xl shadow-xl border border-zinc-100"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 text-zinc-900 shadow-lg hover:bg-white transition-all z-20 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 text-zinc-900 shadow-lg hover:bg-white transition-all z-20 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="flex flex-col items-center gap-2"
            >
              <div className={`h-1 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-12 bg-blue-600" : "w-6 bg-zinc-300"}`} />
              <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${currentIndex === idx ? "text-blue-600" : "text-zinc-400"}`}>
                {slide.type}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Decorative Shadow/Glow */}
      <div className="absolute -inset-4 bg-blue-500/5 blur-[100px] rounded-full -z-10" />
    </div>
  );
}
