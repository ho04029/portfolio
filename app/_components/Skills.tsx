import React from "react";
import Image from "next/image";
import Common from "./Common";

const Skills = () => {
  return (
    <Common.section>
      <Common.title>Skills</Common.title>
      <section>
        <h3>FrontEnd</h3>
        <div>
          <ul>
            <li>
              <Image src={"/html.png"} alt="html" height={50} width={50} />
            </li>
            <li>
              <Image src={"/css.png"} alt="css" height={50} width={50} />
            </li>
            <li>
              <Image
                src={"/javaScript.png"}
                alt="javascript"
                height={50}
                width={50}
              />
            </li>
            <li>
              <Image src={"/react.png"} alt="react" height={50} width={50} />
            </li>
            <li>
              <Image src={"/nextjs.png"} alt="nextjs" height={50} width={50} />
            </li>
            <li>
              <Image src={"/redux.png"} alt="redux" height={50} width={50} />
            </li>
            <li>
              <Image
                src={"/zustand.png"}
                alt="zustand"
                height={50}
                width={50}
              />
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>BackEnd</h3>
        <div>
          <ul>
            <li>
              <Image src={"/nodejs.png"} alt="nodejs" height={50} width={50} />
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Etc</h3>
        <div></div>
      </section>
    </Common.section>
  );
};

export default Skills;
