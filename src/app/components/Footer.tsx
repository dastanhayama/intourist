import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  const t = useTranslations("Header");
  const v = useTranslations("Footer");
  const b = useTranslations("Services");
  const n = useTranslations("Cars");

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
          <FaWhatsapp size={20} />
          <a href="https://wa.me/+996509812222" target="_blank">
            {" "}
            WhatsApp
          </a>
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
        <a
          href="https://wa.me/+996509812222"
          target="_blank"
          className="text-white hover:text-accent cursor-pointer transition duration-200">
          {b("1")}
        </a>
        <a
          href="https://wa.me/+996509812222"
          target="_blank"
          className="text-white hover:text-accent cursor-pointer transition duration-200">
          {b("2")}
        </a>
        <a
          href="https://wa.me/+996509812222"
          target="_blank"
          className="text-white hover:text-accent cursor-pointer transition duration-200">
          {b("3")}
        </a>
        <a
          href="https://wa.me/+996509812222"
          target="_blank"
          className="text-white hover:text-accent cursor-pointer transition duration-200">
          {b("4")}
        </a>
        <a
          href="https://wa.me/+996509812222"
          target="_blank"
          className="text-white hover:text-accent cursor-pointer transition duration-200">
          {b("5")}
        </a>
      </ul>
      <ul className="flex flex-col gap-4">
        <li className="text-lg font-bold text-white">{t("cars-link")}</li>
        <a
          href="https://wa.me/+996509812222"
          target="_blank"
          className="text-white hover:text-accent cursor-pointer transition duration-200">
          {n("1")}
        </a>
        <a
          href="https://wa.me/+996509812222"
          target="_blank"
          className="text-white hover:text-accent cursor-pointer transition duration-200">
          {n("2")}
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
