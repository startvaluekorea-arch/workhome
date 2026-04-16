"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart } from "lucide-react";

interface CertItem {
  title: string;
  description: string;
  benefits?: string[];
  icon: React.ReactNode;
}

const CERTS: CertItem[] = [
  {
    title: "중증장애인생산품시설",
    description: "중증장애인들이 생산한 가치 있는 품질의 제품을 제공하는 시설로 인증받았습니다.",
    benefits: [
      "수의계약 및 우선구매 1.1% 의무 달성",
      "고용부담금 감면으로 직접적인 비용 절약 (최대 50%)",
    ],
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "장애인표준사업장",
    description: "장애인에게 안정된 일자리와 양질의 고용환경을 제공하는 표준사업장입니다.",
    benefits: [
      "공공기관 우선구매 의무 대상 (총 구매액의 0.8% 이상)",
      "수의계약 체결 및 시행령에 따른 안정적 판로 확보",
    ],
    icon: <Award className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "사회적기업인증서",
    description: "사회적 목적을 추구하며 영업활동을 수행하는 고용노동부 인증 사회적기업입니다.",
    benefits: ["공공기관 우선구매 및 구매 실적 자동 충족"],
    icon: <Heart className="w-8 h-8 text-blue-600" />,
  },
];

export function CertificationsSection() {
  return (
    <section id="cert" className="py-24 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4 block"
          >
            Certifications
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif mb-6"
          >
            우선구매 인증 현황
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 max-w-2xl mx-auto text-lg"
          >
            (사)아름다운사람들은 사회적 가치를 실현하며 신뢰할 수 있는 기관으로 인정받고 있습니다. 
            공공기관 우선구매 대상 기업으로서 최상의 파트너십을 약속합니다.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 p-4 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {cert.benefits && (
                <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-[11px] font-bold text-blue-600 uppercase tracking-tight mb-2">Key Benefits</p>
                  <ul className="space-y-1.5">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-[12px] text-blue-800 leading-snug flex items-start gap-1.5">
                        <span className="text-blue-400 mt-0.5">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-auto">
                {/* Image Placeholder */}
                <div className="aspect-[3/4] bg-zinc-200 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-zinc-300 text-zinc-400 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">
                  <p className="text-xs font-medium text-center px-4">인증서 이미지<br/>(추후 삽입 가능)</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
