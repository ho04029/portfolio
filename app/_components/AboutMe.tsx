import React from "react";
import Image from "next/image";
import Common from "./Common";

const AboutMe = () => {
  return (
    <Common.section>
      <Common.title>About Me</Common.title>
      <div className="flex justify-between">
        <div className="flex-1/2">
          <Image src={"/aboutMe.jpg"} alt="이석경" width={500} height={500} />
        </div>
        <article className="flex-1/2">
          <p>이석경</p>
          <p>email: ho04029@naver.com</p>
          <p>
            github:{" "}
            <a href="https://github.com/ho04029">https://github.com/ho04029</a>
          </p>
          <p>
            처음에는 막연한 호기심에서 시작했지만 개발을 통해 성장의 즐거움을
            깨달았습니다. 이제는 프론트엔드의 가능성을 확장하는 개발자가 되는
            것이 목표입니다. 새로운 기술을 배우고 빠르게 적용하며 사용자 경험을
            고려한 개발에 집중하고 있습니다. 프로젝트와 인턴 경험을 통해
            팀워크와 소통의 중요성을 배웠고 협업을 통해 더 나은 결과물을 만드는
            과정에서 보람을 느꼈습니다. 변화하는 환경에 유연하게 적응하며 배운
            것을 실무에 활용하는 개발자가 되겠습니다.
          </p>
        </article>
      </div>
    </Common.section>
  );
};

export default AboutMe;
