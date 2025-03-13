import Start from "../_components/Start";
import AboutMe from "../_components/AboutMe";
import Skills from "../_components/Skills";
import Career from "../_components/Career";
import Project from "../_components/Project";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Start />
      <AboutMe />
      <Skills />
      <Career />
      <Project />
    </div>
  );
}
