"use client";

import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { PortfolioCard } from "@/components/portfolio-card";
import { PORTFOLIO_DATA, CATEGORIES } from "@/data/portfolio";
import { useSearchParams } from "next/navigation";

function PortfolioListContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "전체";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // URL 파라미터가 변경될 때 상태 업데이트
  React.useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filteredData = activeCategory === "전체" 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.category === activeCategory);

  return (
    <main className="flex-grow pt-32 pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block"
        >
          Creative Portfolio
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8"
        >
          포트폴리오
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 text-lg max-w-2xl mx-auto"
        >
          아름다운사람들이 창조하는 다양한 디자인과 인쇄 제작물을 확인하세요. 
          고객의 가치를 가장 빛나는 결과물로 만들어냅니다.
        </motion.p>
      </div>

      {/* Categories Tab */}
      <div className="max-w-7xl mx-auto px-6 mb-16 overflow-x-auto">
        <div className="flex justify-start md:justify-center items-center gap-2 md:gap-4 min-w-max pb-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === category 
                ? "bg-zinc-900 text-white shadow-xl shadow-zinc-900/20 scale-105" 
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, idx) => (
              <PortfolioCard key={item.id} item={item} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredData.length === 0 && (
          <div className="text-center py-32">
            <p className="text-zinc-400 text-lg">해당 카테고리의 포트폴리오가 아직 준비 중입니다.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <SiteHeader />
      <Suspense fallback={
        <div className="flex-grow pt-32 text-center">
          <p className="text-zinc-400">Loading Portfolio...</p>
        </div>
      }>
        <PortfolioListContent />
      </Suspense>
      {/* Footer (Simplified for this page) */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-400 text-sm">© 2024 (사)아름다운사람들. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
