import React from "react";

const Common = () => {
  return <></>;
};

export default Common;

Common.section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative w-full flex flex-col items-center pt-40 px-40  gap-20">
      {children}
    </section>
  );
};

Common.title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="font-[Cafe24Ssurround] text-5xl">{children}</h2>;
};
