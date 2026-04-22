export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  client: string;
  year: string;
  description: string;
  images: {
    cover: string;
    spread1: string;
    spread2: string;
  };
  specs: {
    size: string;
    pages: string;
    color: string;
    paper: string;
    processing: string;
  };
}

export const CATEGORIES = [
  "전체",
  "책자",
  "브로슈어/카탈로그",
  "리플렛",
  "포스터",
  "PPT",
  "웹진"
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "vision-2024-brochure",
    category: "브로슈어/카탈로그",
    title: "2024 기업 브랜드 아이덴티티 브로슈어",
    client: "아름다운사람들",
    year: "2024",
    description: "아름다운사람들의 비전과 가치를 담아낸 2024년 브랜드 브로슈어입니다. 미니멀한 디자인과 고급스러운 종이 재질을 사용하여 기업의 신뢰도를 높였습니다.",
    images: {
      cover: "/assets/portfolio/brochure-cover.png",
      spread1: "/assets/portfolio/brochure-spread1.png",
      spread2: "/assets/portfolio/brochure-spread2.png",
    },
    specs: {
      size: "210 x 297 mm (A4)",
      pages: "32p",
      color: "4단 컬러 인쇄",
      paper: "표지: 랑데뷰 240g / 내지: 랑데뷰 130g",
      processing: "표지 무광 코팅, 부분 코팅, 무선 제본",
    }
  },
  {
    id: "social-impact-report",
    category: "책자",
    title: "2023 사회적 가치 실현 성과 보고서",
    client: "고용노동부",
    year: "2023",
    description: "사회적 기업으로서의 성과와 임팩트를 수치와 인포그래픽으로 시각화한 보고서입니다. 가독성에 중점을 두어 제작되었습니다.",
    images: {
      cover: "/assets/portfolio/brochure-cover.png", // 재사용 (데모용)
      spread1: "/assets/portfolio/brochure-spread1.png",
      spread2: "/assets/portfolio/brochure-spread2.png",
    },
    specs: {
      size: "185 x 260 mm",
      pages: "64p",
      color: "4단 컬러 인쇄",
      paper: "표지: 스노우 250g / 내지: 백색모조 100g",
      processing: "표지 유광 코팅, 무선 제본",
    }
  },
];
