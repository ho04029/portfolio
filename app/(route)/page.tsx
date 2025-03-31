import Start from "../_components/Start";
import AboutMe from "../_components/AboutMe";
import Skills from "../_components/Skills";
import Career from "../_components/Career";
import Project from "../_components/Project";

export default function Home() {
  return (
    <div className="items-center justify-items-center bg-[#e7e3df] font-[Pretendard-Regular]">
      <Start />
      <AboutMe />
      <Skills />
      <Career />
      <Project />
    </div>
  );
}
