import React from "react";
import Image from "next/image";

const Start = () => {
  return (
    <section className="relative h-dvh w-full">
      <Image
        src={"/sky.jpg"}
        alt="skyBg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute top-1/2 right-1/2 translate-x-1/2">
        <h2>FRONTEND</h2>
        <h2>PORTFOLIO</h2>
      </div>
    </section>
  );
};

export default Start;
