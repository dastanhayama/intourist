import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Header");
  const v = useTranslations("Footer");
  const b = useTranslations("Services");

  return (
    <footer
      id="contact"
      className="w-full h-auto flex md:flex-row flex-col gap-8 md:gap-4 justify-between items-start py-6 px-6 md:px-[200px] bg-primary max-w-[1440px]">
      <ul className="flex flex-col gap-4">
        <li className="text-lg font-bold text-white">{t("contact-link")}</li>
        <li className="flex items-center gap-2 text-white hover:text-accent cursor-pointer transition duration-200">
          <FaPhone size={20} />
          <a href="tel:+996509812222"> +996 509 812 222</a>
        </li>
        <li className="flex items-center gap-2 text-white hover:text-accent cursor-pointer transition duration-200">
          <FaLocationArrow size={20} />
          {v("address")}
        </li>
        <li className="flex items-center gap-2 text-white hover:text-accent cursor-pointer transition duration-200">
          <IoMdMail size={20} />
          <a href="mailto: intourist.official@gmail.com" target="_blank">
            intourist.official@gmail.com
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li className="text-lg font-bold text-white">{t("home-link")}</li>
        <li className="text-white hover:text-accent cursor-pointer transition duration-200">
          {b("1")}
        </li>
        <li className="text-white hover:text-accent cursor-pointer transition duration-200">
          {b("2")}
        </li>
        <li className="text-white hover:text-accent cursor-pointer transition duration-200">
          {b("3")}
        </li>
      </ul>
      <ul className="flex flex-col gap-4">
        <li className="text-lg font-bold text-white">{t("cars-link")}</li>
        <li className="text-white hover:text-accent cursor-pointer transition duration-200">
          Автобус Сетра 315 HD, 48 мест
        </li>
        <li className="text-white hover:text-accent cursor-pointer transition duration-200">
          Автобус-Мерседес 46 мест
        </li>
        <li className="text-white hover:text-accent cursor-pointer transition duration-200">
          Минивен
        </li>
        <li className="text-white hover:text-accent cursor-pointer transition duration-200">
          Мерседес Спринтер
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
