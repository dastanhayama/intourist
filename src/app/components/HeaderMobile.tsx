import Link from "next/link";
import { useTranslations } from "next-intl";

function HeaderMobile() {
  const t = useTranslations("Header");
  return (
    <div className=" w-full h-auto flex md:hidden justify-center items-center py-2 px-6  md:px-[200px] bg-accent max-w-[1440px]">
      <ul className="flex gap-8 items-center  text-primary font-semibold">
        <a
          href="#services"
          className="px-2 py-1 rounded-md bg-accent hover:bg-[#ffcc33] transition duration-200">
          {t("home-link")}
        </a>
        <a
          href="#cars"
          className="px-2 py-1 rounded-md bg-accent hover:bg-[#ffcc33] transition duration-200">
          {t("cars-link")}
        </a>
        <a
          href="#contact"
          className="px-2 py-1 rounded-md bg-accent hover:bg-[#ffcc33] transition duration-200">
          {t("contact-link")}
        </a>
      </ul>
    </div>
  );
}

export default HeaderMobile;
