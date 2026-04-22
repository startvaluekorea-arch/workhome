"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PortfolioItem {
  title: string;
  enTitle: string;
  subtitle: string;
  image: string;
  category: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "책자",
    enTitle: "Book",
    subtitle: "감각적이고 세련된 디자인으로!",
    image: "/assets/portfolio/book.png",
    category: "책자",
  },
  {
    title: "브로슈어",
    enTitle: "Brochure",
    subtitle: "명료한 컨셉으로 무장된!",
    image: "/assets/portfolio/brochure.png",
    category: "브로슈어/카탈로그",
  },
  {
    title: "리플렛",
    enTitle: "Leaflet",
    subtitle: "가치 창출을 위한 아이디어로!",
    image: "/assets/portfolio/leaflet.png",
    category: "리플렛",
  },
  {
    title: "포스터",
    enTitle: "Poster",
    subtitle: "전문적이고 명쾌한 디자인",
    image: "/assets/portfolio/poster.png",
    category: "포스터",
  },
  {
    title: "PPT",
    enTitle: "PPT Slide",
    subtitle: "프레젠테이션의 특징을 톡톡하게!",
    image: "/assets/portfolio/ppt.png",
    category: "PPT",
  },
  {
    title: "웹진",
    enTitle: "Webzine",
    subtitle: "최신 디지털 기획과 감성 웹진!",
    image: "/assets/portfolio/webzine.png",
    category: "웹진",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <Link 
              key={item.title}
              href={`/portfolio?category=${item.category}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white flex flex-col items-center gap-2">
                      <ExternalLink className="w-10 h-10 transform translate-y-4 group-hover:translate-y-0 transition-transform" />
                      <span className="font-bold text-sm">자세히 보기</span>
                    </div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
