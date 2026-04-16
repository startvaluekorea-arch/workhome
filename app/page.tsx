import { HeroSection } from "@/components/hero-section";
import { CertificationsSection } from "@/components/certifications-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 바디 1: 히어로 섹션 (해양 테마 슬라이더) */}
      <HeroSection />

      {/* 바디 2: 인증현황 (우선구매 인증 등) */}
      <CertificationsSection />

      {/* 바디 3: 포트폴리오 (8개 카테고리 그리드) */}
      <PortfolioSection />

      {/* 바디 4 및 푸터: 공지사항, FAQ, 주문현황 및 기업 정보 */}
      <FooterSection />
    </main>
  );
}
