import React from "react";
import { useTranslations } from "next-intl";
function Features() {
  const t = useTranslations("Features");
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-8 py-8 px-6 md:px-[200px]  max-w-[1440px]">
      <h3 className="text-xl font-bold uppercase text-primary text-center">
        {t("title")}
      </h3>
      <div className="w-full bg-accent rounded-md h-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 p-8">
        <div className="flex items-center justify-start gap-4 col-span-1 ">
          <span className="text-primary text-sm flex gap-4 items-center text-center md:text-left">
            <span className="rounded-md text-white bg-primary py-1 px-3 flex items-center justify-center">
              {" "}
              1
            </span>{" "}
            {t("1")}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 col-span-1 ">
          <span className="text-primary text-sm flex gap-4 items-center text-center md:text-left">
            <span className="rounded-md text-white bg-primary py-1 px-3 flex items-center justify-center">
              {" "}
              2
            </span>{" "}
            {t("2")}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 col-span-1 ">
          <span className="text-primary text-sm flex gap-4 items-center text-center md:text-left">
            <span className="rounded-md text-white bg-primary py-1 px-3 flex items-center justify-center">
              {" "}
              3
            </span>{" "}
            {t("3")}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 col-span-1 ">
          <span className="text-primary text-sm flex gap-4 items-center text-center md:text-left">
            <span className="rounded-md text-white bg-primary py-1 px-3 flex items-center justify-center">
              {" "}
              4
            </span>{" "}
            {t("4")}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 col-span-1 ">
          <span className="text-primary text-sm flex gap-4 items-center text-center md:text-left">
            <span className="rounded-md text-white bg-primary py-1 px-3 flex items-center justify-center">
              {" "}
              5
            </span>{" "}
            {t("5")}
          </span>
        </div>
        <div className="flex items-center justify-start gap-4 col-span-1 ">
          <span className="text-primary text-sm flex gap-4 items-center text-center md:text-left">
            <span className="rounded-md text-white bg-primary py-1 px-3 flex items-center justify-center">
              {" "}
              6
            </span>{" "}
            {t("6")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Features;
