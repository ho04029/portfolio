import React from "react";
import Common from "./Common";

//타입 정의
interface Project {
  projectName: string;
  description: string;
  period: string;
  skills: string[];
  role: string[];
}

interface Career {
  company: string;
  period: string;
  projects: Project[];
}

//데이터
const careerData: Career[] = [
  {
    company: "Connect Value",
    period: "2024.05 ~ 2024.08",
    projects: [
      {
        projectName: "교육문의 페이지 프론트 개발",
        description: "",
        period: "",
        skills: ["Next.js", "styled-component", "Ant Design"],
        role: [
          "반응형 UI개발 및 최적화",
          "Figma를 활용해 기획자, 디자이너와 협업하여 UI 설계",
          "GitHub을 이용한 협업 ",
          "IntersectionObserver를 활용한 스크롤 애니메이션 구현",
          "Ant Design의 Carousel 컴포넌트를 활용해 캐러셀 UI 구현",
        ],
      },
      {
        projectName: "엑지트 기능 개발 및 유지 보수",
        description: "",
        period: "",
        skills: [
          "React",
          "Recoil",
          "TanStack Query",
          "axios",
          "Tailwind CSS",
          "Node.js",
          "MySQL",
        ],
        role: [
          "gitLab을 이용한 협업",
          "모바일 대응을 위해 한/영 키패드를 숫자 키패드로 수정",
          "게임 안정성 개선을 위해 페이지 진입 시 로딩 중 또는 에러 발생 시 게임 화면 비활성화 처리",
          "Linux환경에서 nginx설정을 수정하여 http에서 https로 전환하여 보안 강화",
          "팀장 권한 자동해제 로직 구현",
        ],
      },
      {
        projectName: "컨퍼런스용 랜딩 페이지 프론트 개발",
        description: "",
        period: "",
        skills: ["JavaScript", "jQuery", "HTML", "CSS"],
        role: [
          "반응형 UI 및 인터랙션 구현",
          "백엔드 개발자와 협업하여 RESTful API 연동",
          "Slick Slider를 활용해 캐러셀 UI 구현",
        ],
      },
    ],
  },
];

//프로젝트 항목 컴포넌트
const ProjectItem: React.FC<{ project: Project }> = ({ project }) => (
  <article>
    <h4>{project.projectName}</h4>
    <p>{project.description}</p>
    <p>기간: {project.period}</p>
    <p>Skills: {project.skills.join(", ") || "없음"}</p>
    <p>담당 역할: {project.role.join(", ") || "없음"}</p>
  </article>
);

//회사별 커리어 섹션 컴포넌트
const CareerSection: React.FC<{ career: Career }> = ({ career }) => (
  <section>
    <h3>{career.company}</h3>
    <p>{career.period}</p>
    {career.projects.map((project, idx) => (
      <ProjectItem key={idx} project={project} />
    ))}
  </section>
);

//Career 메인 컴포넌트
const Career = () => {
  return (
    <Common.section>
      <Common.title>Career</Common.title>
      {careerData.map((career, idx) => (
        <CareerSection key={idx} career={career} />
      ))}
    </Common.section>
  );
};

export default Career;
