"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { PORTFOLIO_DATA, CATEGORIES } from "@/data/portfolio";
import { ChevronLeft, Info, Calendar, Layout, Palette, FileText, Settings } from "lucide-react";
import Link from "next/link";

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const item = PORTFOLIO_DATA.find((p) => p.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>프로젝트를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow pt-32 pb-24">
        {/* Navigation & Categories */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-zinc-100 pb-8">
            <button 
              onClick={() => router.push("/portfolio")}
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-bold text-sm uppercase tracking-wider group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to List
            </button>

            {/* Sub Categories Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={`/portfolio?category=${cat}`}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    item.category === cat 
                    ? "bg-zinc-900 text-white" 
                    : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Project Title Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em]"
            >
              {item.category}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight"
            >
              {item.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex gap-12 text-zinc-400"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">Client</span>
                <span className="text-zinc-900 font-bold">{item.client}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-1">Year</span>
                <span className="text-zinc-900 font-bold">{item.year}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Large Carousel Section */}
        <div className="mb-24">
          <PortfolioCarousel images={item.images} />
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 md:gap-24">
          {/* Description */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold">기획 의도 및 프로젝트 개요</h2>
            </div>
            <div className="prose prose-zinc max-w-none">
              <p className="text-xl text-zinc-600 leading-relaxed font-light">
                {item.description}
              </p>
              <p className="text-lg text-zinc-500 mt-6 leading-relaxed">
                이 프로젝트는 {item.client}의 브랜드 가치를 극대화하기 위해 기획되었습니다. 
                사용자 중심의 레이아웃과 감각적인 시각 요소를 결합하여 정보 전달력과 브랜드 이미지를 동시에 강화했습니다.
                특히 {item.specs.processing}과 같은 정밀한 후가공 공정을 통해 인쇄물 본연의 가치를 한층 더 높였습니다.
              </p>
            </div>
          </div>

          {/* Technical Specs Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-50 rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full group-hover:scale-150 transition-transform" />
              
              <h3 className="text-xl font-bold mb-10 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Technical Specifications
              </h3>
              
              <ul className="space-y-8">
                <SpecItem icon={<Calendar className="w-5 h-5" />} label="발행연도" value={item.year} />
                <SpecItem icon={<Layout className="w-5 h-5" />} label="규격/사이즈" value={item.specs.size} />
                <SpecItem icon={<FileText className="w-5 h-5" />} label="페이지/면수" value={item.specs.pages} />
                <SpecItem icon={<Palette className="w-5 h-5" />} label="인쇄도수" value={item.specs.color} />
                <SpecItem icon={<FileText className="w-5 h-5" />} label="사용용지" value={item.specs.paper} />
                <SpecItem icon={<Settings className="w-5 h-5" />} label="후가공/제본" value={item.specs.processing} />
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm">© 2024 (사)아름다운사람들. All Rights Reserved.</p>
          <div className="flex gap-8 text-sm font-bold text-zinc-500 uppercase tracking-widest">
            <button onClick={() => router.back()} className="hover:text-blue-600">Back</button>
            <a href="#" className="hover:text-blue-600">Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1 text-zinc-400">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-1">{label}</div>
        <div className="text-zinc-900 font-medium">{value}</div>
      </div>
    </li>
  );
}
