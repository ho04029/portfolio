import React from "react";
import Image from "next/image";
import Common from "./Common";

interface Skill {
  src: string;
  alt: string;
}

interface SkillData {
  FrontEnd: Skill[];
  BackEnd: Skill[];
  Etc: Skill[];
}

const skillData: SkillData = {
  FrontEnd: [
    { src: "/javaScript.png", alt: "javascript" },
    { src: "/typescript.png", alt: "typescript" },
    { src: "/react.png", alt: "react" },
    { src: "/nextjs.png", alt: "nextjs" },
    { src: "/redux.png", alt: "redux" },
    { src: "/recoil.png", alt: "recoil" },
    { src: "/reactQuery.png", alt: "React Query" },
    { src: "/zustand.png", alt: "zustand" },
    { src: "/html.png", alt: "html" },
    { src: "/css.png", alt: "css" },
  ],
  BackEnd: [
    { src: "/nodejs.png", alt: "nodejs" },
    { src: "/java.png", alt: "java" },
    { src: "/MySQL.png", alt: "MySQL" },
  ],
  Etc: [
    { src: "/github.png", alt: "github" },
    { src: "/gitlab.png", alt: "gitlab" },
    { src: "/figma.png", alt: "figma" },
    { src: "/notion.png", alt: "notion" },
    { src: "/slack.png", alt: "slack" },
  ],
};

const SkillUl: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="flex">{children}</ul>
);

const SkillImgLi: React.FC<Skill> = ({ src, alt }) => (
  <li>
    <Image src={src} alt={alt} height={50} width={50} />
  </li>
);

const SkillSection: React.FC<{ title: string; skills: Skill[] }> = ({
  title,
  skills,
}) => (
  <section>
    <h3>{title}</h3>
    <SkillUl>
      {skills.map((skill) => (
        <SkillImgLi key={skill.alt} {...skill} />
      ))}
    </SkillUl>
  </section>
);

const Skills = () => {
  return (
    <Common.section>
      <Common.title>Skills</Common.title>
      {Object.entries(skillData).map(([category, skills]) => (
        <SkillSection key={category} title={category} skills={skills} />
      ))}
    </Common.section>
  );
};

export default Skills;
