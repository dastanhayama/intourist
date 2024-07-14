import React from "react";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-8 py-8 px-6 md:px-[200px]  max-w-[1440px]">
      <h1 className="text-xl font-bold uppercase text-primary text-center">
        {t("title")}
      </h1>
      <p className="text-md font-semibold text-primary text-justify md:text-center">
        {t("description")}
      </p>
      <p className="text-md text-primary text-justify">{t("desc2")}</p>
    </section>
  );
}

export default Hero;
