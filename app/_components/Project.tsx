import React from "react";
import Common from "./Common";

//타입정의
interface Project {
  projectName: string;
  description: string;
  period: string;
  skills: string[];
  role: string[];
  github: string;
  site?: string;
  notion?: string;
}

//데이터
const ProjectData: Project[] = [
  {
    projectName: "My Idols",
    description:
      "React를 활용하여 제작한 아이돌 그룹 정보, 멤버 소개, 앨범 판매량 등 다양한 정보를 제공하는 웹사이트입니다.",
    period: "",
    skills: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Chart.js"],
    role: [],
    github: "https://github.com/ho04029/MyIdol",
    site: "https://myidol.vercel.app",
  },
  {
    projectName: "감정일기장",
    description:
      "React를 활용하여 제작한 감정 일기를 작성하고 관리할 수 있는 개인화된 웹 애플리케이션입니다.",
    period: "",
    skills: ["React", "TypeScript", "Zustand"],
    role: [],
    github: "https://github.com/ho04029/emotion-diary",
  },
  {
    projectName: "Nextjs 블로그",
    description:
      "Next.js를 공부하기 위해 제작한 프로젝트로 SEO와 콘텐츠 관리에 최적화된 블로그 플랫폼입니다. ",
    period: "",
    skills: ["Next.js", "remark", "remark-html"],
    role: [],
    github: "https://github.com/ho04029/nextjs-blog",
  },
  {
    projectName: "BaNaDa",
    description:
      "중고거래를 위한 웹 사이트로 풀스택 개발 프로젝트입니다. 팀 프로젝트로 진행되었으며, 프론트엔드와 백엔드 양측에서 적극적인 역할을 수행했습니다. (현재 비용문제로 배포 종료)",
    period: "",
    skills: ["JavaScript", "jQuery", "HTML", "CSS", "Spring Boot", "MySQL"],
    role: [],
    github: "https://github.com/ho04029/FinalProject",
  },
];

//컴포넌트
const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <li className="">
      <h4>{project.projectName}</h4>
      <p>{project.description}</p>
      <p>기간: {project.period}</p>
      <p>Skills: {project.skills.join(", ")}</p>
      <p>담당 역할: {project.role.join(", ")}</p>
      <p>
        GitHub: <a href={project.github}>{project.github}</a>
      </p>
      {project.site && (
        <p>
          Site: <a href={project.site}>{project.site}</a>
        </p>
      )}
      {project.notion && (
        <p>
          Notion: <a href={project.notion}>{project.notion}</a>
        </p>
      )}
    </li>
  );
};

const Project = () => {
  return (
    <Common.section>
      <Common.title>Project</Common.title>
      <ul className="grid grid-cols-3 gap-4">
        {ProjectData.map((project) => (
          <ProjectItem project={project} key={project.projectName} />
        ))}
      </ul>
    </Common.section>
  );
};

export default Project;
