import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("Header");
  return (
    <nav className=" w-full h-auto flex justify-between items-center pt-[6px] px-6 md:px-[200px] pb-2 bg-primary max-w-[1440px]">
      <Link href="/" className="flex items-center h-full">
        <img src="/logo.png" alt="logo" className="w-[80px] md:w-[100px]" />
      </Link>
      <ul className="md:flex gap-8 items-center hidden text-white font-semibold">
        <a
          href="#services"
          className="px-2 py-1 rounded-md bg-primary hover:bg-[#292929] transition duration-200">
          {t("home-link")}
        </a>
        <a
          href="#cars"
          className="px-2 py-1 rounded-md bg-primary hover:bg-[#292929] transition duration-200">
          {t("cars-link")}
        </a>
        <a
          href="#contact"
          className="px-2 py-1 rounded-md bg-primary hover:bg-[#292929] transition duration-200">
          {t("contact-link")}
        </a>
      </ul>
      <a
        href="https://wa.me/+996509812222"
        target="_blank"
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-green-500 text-white">
        <span>WhatsApp</span>
        <FaWhatsapp size={25} />
      </a>
    </nav>
  );
}

export default Header;
