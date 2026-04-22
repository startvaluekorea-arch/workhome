"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { FooterSection } from "@/components/footer-section";
import { ChevronLeft, ChevronRight, CheckCircle2, Gavel, TrendingUp, Users } from "lucide-react";

const CERTIFICATIONS = [
  {
    id: "heavy-disabled",
    title: "중증장애인생산품시설 인증",
    subtitle: "Heavy Disabled People Product Production Facility",
    description: "일반 노동시장에서 참여하기 어려운 중증장애인들을 고용하는 생산시설의 판로를 확보하여 고용을 확대하고, 근로장애인의 안정적 소득을 보장합니다.",
    law: "중증장애인생산품 우선구매 특별법 제2조제2항",
    image: "/assets/certification/우선구매인증_중증장애인생산품시설지정서.png",
    details: [
      {
        icon: <Gavel className="w-5 h-5 text-blue-400" />,
        label: "관련 법령",
        value: "「중증장애인생산품 우선구매 특별법」 제7조"
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
        label: "우선구매 비율",
        value: "공공기관별 총구매액의 1.1% 이상 (2026년 기준)"
      },
      {
        icon: <Users className="w-5 h-5 text-blue-400" />,
        label: "의무 사항",
        value: "매년 구매실적과 구매계획을 보건복지부장관에게 제출"
      }
    ],
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "standard-workplace",
    title: "장애인표준사업장 인증",
    subtitle: "Standard Workplace for the Disabled",
    description: "장애인 고용 인원(10명 이상), 고용 비율(30% 이상), 편의시설 설치 등 엄격한 기준을 충족하여 장애인에게 양질의 고용환경을 제공합니다.",
    law: "장애인고용촉진 및 직업재활법 제22조의3",
    image: "/assets/certification/우선구매인증_장애인 표준사업장 인증서.png",
    details: [
      {
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
        label: "인증 기관",
        value: "한국장애인고용공단"
      },
      {
        icon: <Users className="w-5 h-5 text-emerald-400" />,
        label: "연계 고용 및 우선구매",
        value: "총구매액의 0.8% 이상 우선구매 의무 (2026년 기준)"
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
        label: "부담금 감면",
        value: "납부해야 할 장애인 고용 부담금의 최대 50% 감면"
      }
    ],
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: "social-enterprise",
    title: "사회적기업 인증",
    subtitle: "Social Enterprise Certification",
    description: "취약계층에게 사회서비스 또는 일자리를 제공하여 지역주민의 삶의 질을 높이는 등 사회적 목적을 최우선으로 추구하는 기업입니다.",
    law: "사회적기업육성법",
    image: "/assets/certification/우선구매인증_사회적기업인증서.png",
    details: [
      {
        icon: <Gavel className="w-5 h-5 text-orange-400" />,
        label: "관련 법령",
        value: "사회적기업육성법 제12조"
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-orange-400" />,
        label: "판로 지원",
        value: "사회적기업 생산품과 서비스를 공공기관에서 우선 구매"
      },
      {
        icon: <Users className="w-5 h-5 text-orange-400" />,
        label: "사회적 목적",
        value: "일자리 제공형, 사회서비스 제공형 등 사회적 가치 실현"
      }
    ],
    color: "from-orange-500 to-red-600"
  }
];

export default function CertificationsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  const current = CERTIFICATIONS[currentIndex];

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow pt-24 pb-24 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
            >
              우선구매 인증 현황
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12"
            >
              (사)아름다운사람들은 엄격한 기준을 통과한 공신력 있는 인증을 보유하고 있습니다.
              사회적 책임을 다하는 최고의 파트너가 되겠습니다.
            </motion.p>

            {/* Quick Navigation Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {CERTIFICATIONS.map((cert, idx) => (
                <button
                  key={cert.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-8 py-4 rounded-2xl text-sm font-bold transition-all border ${
                    currentIndex === idx 
                    ? "bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-600/20 scale-105" 
                    : "bg-zinc-900 border-white/10 text-zinc-400 hover:bg-zinc-800 hover:border-white/20"
                  }`}
                >
                  {cert.title}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="relative group">
            {/* Carousel Container */}
            <div className="relative min-h-[650px] md:min-h-[750px] lg:min-h-[800px] bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col lg:flex-row items-center p-12 md:p-20 lg:p-24 gap-12 lg:gap-20"
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-2/5 flex-shrink-0 relative">
                    <motion.div 
                      initial={{ rotate: -5, scale: 0.9 }}
                      animate={{ rotate: 0, scale: 1 }}
                      className="aspect-[3/4] bg-white rounded-3xl p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/10 relative z-10"
                    >
                      <img 
                        src={current.image} 
                        alt={current.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    {/* Floating Accent */}
                    <div className={`absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br ${current.color} blur-[80px] opacity-40`} />
                    <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${current.color} blur-[80px] opacity-20`} />
                  </div>

                  {/* Content Side */}
                  <div className="flex-grow text-left">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-gradient-to-r ${current.color} text-white shadow-lg shadow-black/20`}
                    >
                      Official Certification
                    </motion.div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight"
                    >
                      {current.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-zinc-500 font-mono text-base mb-10 uppercase tracking-widest"
                    >
                      {current.subtitle}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-zinc-300 text-xl leading-relaxed mb-12 max-w-2xl font-light"
                    >
                      {current.description}
                    </motion.p>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                      {current.details.map((detail, idx) => (
                        <div key={idx} className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/[0.07] transition-colors group/item">
                          <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover/item:scale-110 transition-transform">{detail.icon}</div>
                          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">{detail.label}</p>
                          <p className="text-sm text-white font-medium leading-snug">{detail.value}</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls - Side Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                <button 
                  onClick={prevSlide}
                  className="pointer-events-auto p-4 md:p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all active:scale-90 group shadow-2xl"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                <button 
                  onClick={nextSlide}
                  className="pointer-events-auto p-4 md:p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all active:scale-90 group shadow-2xl"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {CERTIFICATIONS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? "w-12 bg-blue-500" : "w-3 bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
