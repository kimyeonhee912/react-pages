import ogaso from "../assets/projectImg/ogaso.png";
import linkedin from "../assets/projectImg/linkedin.png";
import mlb from "../assets/projectImg/MLB.png";
import travelbuddy from "../assets/projectImg/travelbuddy.png";

export const projects = [
  {
    title: "Travelog Website",
    description: "국내 여행자와 가이드를 위한 커뮤니티 사이트",
    des: "이 프로젝트는 여행을 좋아하는 팀원들이 여행자와 가이드를 위한 커뮤니티 사이트를 만들기 위해 진행되었습니다.",
    work: [
      "게시물 조회 기능",
      "상세 게시물 조회",
      "게시물 수정 및 등록 페이지",
    ],
    image: travelbuddy,
    skills: ["Next.Js", "TypeScript", "HTML", "CSS", "tailwindCSS"],
    source: "https://github.com/supercoding-team-project2/travel-buddy-fe",
    size: "2024.08 팀프로젝트",
  },
  {
    title: "MLB Website",
    description: "E-Commerce MLB 클론 사이트",
    des: "이 프로젝트는 E-Commerce 클론 코딩으로, MLB 쇼핑몰을 레퍼런스로 하여 쇼핑몰의 기능을 구현하는 것을 목표로 하였습니다.",
    work: [
      "물품 상세 UI 및 기능 구현 ",
      "장바구니 및 주문 결제 UI 및 기능",
      "주문 완료 UI 및 기능",
      "물품 판매 수정 모달 UI 및 기능",
    ],
    image: mlb,
    skills: ["React.js", "HTML", "CSS"],
    source: "https://github.com/FE-2nd-project/front",
    size: "2024.07 팀프로젝트",
  },
  {
    title: "LinkedIn Website",
    description: "LinkedIn 클론 사이트",
    des: "이 프로젝트는 링크드인 클론 코딩으로, 링크드인의 전반적인 서비스를 구현하는 것을 목표로 하였습니다.",
    work: [
      "구글 회원가입",
      "로그인 기능 구현",
      "홈 화면 유저 프로필 UI 관리",
      "유저 프로필 페이지 생성 및 UI 관리",
      "유저 조회 및 수정 기능",
    ],
    image: linkedin,
    skills: ["React.js", "CSS", "HTML", "spring-boot", "java", "mySQL"],
    source: "https://github.com/orgs/fs-1st-project/repositories",
    size: "2024.06 팀프로젝트",
  },
  {
    title: "5gaso App",
    description: "택시나 카풀 모임을 조직할 수 있는 앱",
    des: "이 프로젝트는 주로 택시나 카풀을 이용하는 학생들을 타겟으로 하여, 비용을 절감할 수 있는 기능을 구현하는 것을 목표로 하였습니다.",
    work: ["피드 기능", "로그인 기능", "채팅 기능", "전반적인 UI/UX 구현"],
    image: ogaso,
    skills: ["ReactNative", "Firebase", "Expo"],
    source: "https://github.com/kimyeonhee912/GraduationProject",
    size: "2023.10 개인프로젝트",
  },
];
