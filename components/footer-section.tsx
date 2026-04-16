"use client";

import React from "react";
import { Plus } from "lucide-react";

const NOTICE_ITEMS = [
  { title: "2026년 한국교육개발원 인쇄 입찰 재설정", date: "2026.04.10" },
  { title: "2026년 한국직업능력연구원 인쇄 입찰 자동화", date: "2026.04.10" },
  { title: "2026년 국가평생교육진흥원 인쇄 입찰 자동화", date: "2026.04.10" },
  { title: "2026년~2027년 한국교통연구원 인쇄 업체 등록", date: "2025.10.31" },
];

const FAQ_ITEMS = [
  { title: "옵션제작(별도) 제작이 가능하신지요?", date: "2025.10.29" },
  { title: "상품구성/멀티미디어 콘텐츠 제작도 가능한가요?", date: "2023.03.16" },
  { title: "스탠드브로슈어는 무엇인가요?", date: "2022.08.17" },
  { title: "신용카드 결제나 세금계산서 발급 가능여부", date: "2022.01.30" },
];

const ORDER_ITEMS = [
  { title: "[2026-04-15] 군산시 장미동 어업생물센터 홍보", status: "진행상황" },
  { title: "[2026-04-15] 수확사업 25-13-05 202...", status: "한국직업능력연구원" },
  { title: "[2026-04-14] 수확 25-13-04 2025년...", status: "에너지경제연구원" },
  { title: "[2026-04-14] 세계에너지시장사이트 제25-2...", status: "국토연구원" },
];

const PARTNERS = [
  { name: "KRIHS", logo: "국토연구원" },
  { name: "STEPI", logo: "과학기술정책연구원" },
  { name: "KEI", logo: "한국환경연구원" },
  { name: "KIEP", logo: "대외경제정책연구원" },
  { name: "KIPF", logo: "한국조세재정연구원" },
  { name: "KISTA", logo: "한국특허전략개발원" },
];

export function FooterSection() {
  return (
    <footer className="bg-white pt-20 border-t border-zinc-100">
      {/* 3-Column Board Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Notice */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900/10">
              <h3 className="text-lg font-bold text-zinc-900">공지사항</h3>
              <button className="text-zinc-400 hover:text-blue-600 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-4">
              {NOTICE_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm text-zinc-600 truncate mr-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 shrink-0">[{item.date}]</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900/10">
              <h3 className="text-lg font-bold text-zinc-900">자주묻는질문(FAQ)</h3>
              <button className="text-zinc-400 hover:text-blue-600 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm text-zinc-600 truncate mr-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 shrink-0">[{item.date}]</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Order History */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900/10">
              <h3 className="text-lg font-bold text-zinc-900">주문진행내역</h3>
              <button className="text-zinc-400 hover:text-blue-600 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-4">
              {ORDER_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm text-zinc-600 truncate mr-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-medium text-zinc-400 shrink-0">{item.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partners Row */}
      <div className="bg-zinc-50 py-10 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden relative">
          <div className="flex items-center justify-between gap-8 opacity-60">
            {PARTNERS.map((partner) => (
              <div 
                key={partner.name} 
                className="text-xs font-bold text-zinc-400 tracking-tighter filter grayscale hover:grayscale-0 transition-all cursor-crosshair"
              >
                {partner.name} <span className="text-[10px] font-normal block">{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <nav className="flex items-center gap-6 text-xs font-bold text-zinc-500">
              <a href="#" className="hover:text-zinc-900 transition-colors">이용약관</a>
              <span className="w-px h-3 bg-zinc-200" />
              <a href="#" className="hover:text-zinc-900 transition-colors">개인정보처리방침</a>
            </nav>
            <div className="text-[11px] leading-relaxed text-zinc-400 space-y-1">
              <p>서울시 성동구 독서로 1길 25 서울숲한라에코밸리 702호</p>
              <p>Tel: 02-6948-1650 | Fax: 02-6948-1649 | E-mail: <span className="text-blue-500">misa3130@misawell.org</span></p>
              <p className="mt-4 uppercase tracking-tighter">COPYRIGHT 2015 @ MisaWelfare Co. All Rights Reserved.</p>
              <p>본 홈페이지의 모든 내용은 저작권법의 보호를 받으므로 무단 복제 및 배포를 금지합니다.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-serif text-xl font-bold text-zinc-800 leading-tight">아름다운사람들</p>
              <p className="text-[10px] tracking-[0.2em] text-zinc-400 font-medium">MISAWELL</p>
            </div>
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
