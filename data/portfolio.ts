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
      cover: "/assets/portfolio/brochure-new-cover.png",
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
      cover: "/assets/portfolio/book.png",
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
  {
    id: "premium-leaflet-2024",
    category: "리플렛",
    title: "2024 에코 프렌들리 브랜드 리플렛",
    client: "친환경생활협동조합",
    year: "2024",
    description: "지속 가능한 삶을 위한 가이드를 담은 3단 접지 리플렛입니다. 친환경 콩기름 인쇄와 재생지를 사용하여 브랜드의 정체성을 강조했습니다.",
    images: {
      cover: "/assets/portfolio/leaflet.png",
      spread1: "/assets/portfolio/leaflet-spread1.png",
      spread2: "/assets/portfolio/leaflet-spread2.png",
    },
    specs: {
      size: "297 x 210 mm (펼침면)",
      pages: "6면",
      color: "4단 컬러 콩기름 인쇄",
      paper: "친환경 재생지 160g",
      processing: "3단 접지, 오시 가공",
    }
  },
  {
    id: "city-festival-poster",
    category: "포스터",
    title: "2024 시티 페스티벌 공식 홍보 포스터",
    client: "문화체육관광부",
    year: "2024",
    description: "도시의 활력과 문화를 상징하는 역동적인 그래픽의 포스터입니다. 강렬한 색채 대비를 통해 시선을 사로잡도록 디자인되었습니다.",
    images: {
      cover: "/assets/portfolio/poster.png",
      spread1: "/assets/portfolio/poster-detail1.png",
      spread2: "/assets/portfolio/poster-detail2.png",
    },
    specs: {
      size: "594 x 841 mm (A1)",
      pages: "1p",
      color: "단면 컬러 인쇄",
      paper: "스노우 180g",
      processing: "무광 코팅",
    }
  },
  {
    id: "annual-strategy-ppt",
    category: "PPT",
    title: "2024 기업 연간 전략 기획서",
    client: "글로벌 테크놀로지",
    year: "2024",
    description: "전문적이고 신뢰감 있는 비즈니스 제안을 위한 프리미엄 PPT 템플릿 및 디자인입니다. 데이터 시각화와 논리적인 레이아웃에 집중했습니다.",
    images: {
      cover: "/assets/portfolio/ppt.png",
      spread1: "/assets/portfolio/ppt-slide1.png",
      spread2: "/assets/portfolio/ppt-slide2.png",
    },
    specs: {
      size: "16:9 와이드스크린",
      pages: "45 slides",
      color: "RGB 디지털 컬러",
      paper: "디지털 배포용 (PDF)",
      processing: "인터랙티브 PDF 변환",
    }
  },
  {
    id: "culture-trends-webzine",
    category: "웹진",
    title: "CULTURE & TRENDS 디지털 매거진",
    client: "현대문화연구소",
    year: "2024",
    description: "모바일과 웹 환경에 최적화된 디지털 매거진입니다. 반응형 레이아웃과 가독성 높은 타이포그래피를 통해 최상의 독서 경험을 제공합니다.",
    images: {
      cover: "/assets/portfolio/webzine.png",
      spread1: "/assets/portfolio/webzine-main.png",
      spread2: "/assets/portfolio/webzine-article.png",
    },
    specs: {
      size: "반응형 웹 레이아웃",
      pages: "월간 발행",
      color: "RGB 디지털 컬러",
      paper: "온라인 퍼블리싱",
      processing: "HTML5/CSS3 애니메이션 적용",
    }
  },
];
