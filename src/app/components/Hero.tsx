import React from "react";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-8 pb-8   max-w-[1440px]">
      <div className="relative w-full flex items-center justify-center h-auto md:h-[75vh] py-8">
        <img
          src="/hero.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col gap-8 items-center justify-center h-full w-full md:w-1/2 px-6">
          <h1 className="text-4xl font-bold uppercase text-white text-center">
            {t("title")}
          </h1>
          <p className="text-md font-semibold text-white text-center">
            {t("description")}
          </p>
        </div>
      </div>
      <h2
        id="hero"
        className="text-xl font-bold uppercase text-primary text-center">
        {t("title2")}
      </h2>
      <p className="text-md text-primary text-justify px-6 md:px-[200px]">
        {t("desc2")}
      </p>
    </section>
  );
}

export default Hero;
