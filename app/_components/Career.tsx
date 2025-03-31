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
        skills: [],
        role: [],
      },
      {
        projectName: "엑지트 기능 개발 및 유지 보수",
        description: "",
        period: "",
        skills: [],
        role: [],
      },
      {
        projectName: "컨퍼런스용 랜딩 페이지 프론트 개발",
        description: "",
        period: "",
        skills: [],
        role: [],
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
