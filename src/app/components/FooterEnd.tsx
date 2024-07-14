import React from "react";
import { useTranslations } from "next-intl";

function FooterEnd() {
  const v = useTranslations("Footer");

  return (
    <div className="w-full h-auto flex md:flex-row flex-col gap-8 md:gap-4 justify-center items-center py-2 px-6 md:px-[200px] bg-white max-w-[1440px]">
      <p className="text-primary font-semibold text-sm">
        {v("title")} “Intourist_kg” © {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default FooterEnd;
