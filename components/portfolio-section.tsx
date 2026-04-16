"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PortfolioItem {
  title: string;
  enTitle: string;
  subtitle: string;
  image: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "책자",
    enTitle: "Book",
    subtitle: "감각적이고 세련된 디자인으로!",
    image: "/assets/portfolio/book.png",
  },
  {
    title: "브로슈어",
    enTitle: "Brochure",
    subtitle: "명료한 컨셉으로 무장된!",
    image: "/assets/portfolio/brochure.png",
  },
  {
    title: "리플렛",
    enTitle: "Leaflet",
    subtitle: "가치 창출을 위한 아이디어로!",
    image: "/assets/portfolio/leaflet.png",
  },
  {
    title: "PPT",
    enTitle: "PPT Slide",
    subtitle: "프레젠테이션의 특징을 톡톡하게!",
    image: "/assets/portfolio/ppt.png",
  },
  {
    title: "포스터",
    enTitle: "Poster",
    subtitle: "전문적이고 명쾌한 디자인",
    image: "/assets/portfolio/poster.png",
  },
  {
    title: "카탈로그",
    enTitle: "Catalog",
    subtitle: "깔끔하고 정보전달이 효과적인 디자인!",
    image: "/assets/portfolio/catalog.png",
  },
  {
    title: "웹진",
    enTitle: "Webzine",
    subtitle: "최신 디지털 기획과 감성 웹진!",
    image: "/assets/portfolio/webzine.png",
  },
  {
    title: "스마트 콘텐츠",
    enTitle: "Smart Contents",
    subtitle: "시선을 제어할 수 있는 모바일 홍보용!",
    image: "/assets/portfolio/smart_contents.png",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-blue-900 tracking-widest uppercase mb-4"
          >
            PORTFOLIO
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-12 h-1 bg-blue-900 mx-auto mb-12"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-white w-10 h-10 transform translate-y-4 group-hover:translate-y-0 transition-transform" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 text-center bg-white">
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{item.title}</h3>
                <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-2">
                  {item.enTitle}
                </p>
                <div className="w-8 h-0.5 bg-blue-500 mx-auto mb-3" />
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
