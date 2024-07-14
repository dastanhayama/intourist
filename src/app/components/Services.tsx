import React from "react";
import { useTranslations } from "next-intl";

function Services() {
  const t = useTranslations("Header");
  const v = useTranslations("Services");

  return (
    <section
      id="services"
      className="w-full h-auto flex flex-col justify-center items-center gap-8 py-8 px-6 md:px-[200px]  max-w-[1440px]">
      <h3 className="text-xl font-bold uppercase text-primary">
        {t("home-link")}
      </h3>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        <li className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md">
          <img
            src="/bus5.jpg"
            alt="microbus"
            className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
          />
          <a
            href="https://wa.me/+996509812222"
            target="_blank"
            className="font-semibold hover:underline transition duration-200 text-primary cursor-pointer text-center">
            {v("1")}
          </a>
        </li>
        <li className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md">
          <img
            src="/bus0.jpg"
            alt="microbus"
            className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
          />
          <a
            href="https://wa.me/+996509812222"
            target="_blank"
            className="font-semibold hover:underline transition duration-200 text-primary cursor-pointer text-center">
            {v("2")}
          </a>
        </li>
        <li className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md">
          <img
            src="/bus11.jpg"
            alt="microbus"
            className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
          />
          <a
            href="https://wa.me/+996509812222"
            target="_blank"
            className="font-semibold hover:underline transition duration-200 text-primary cursor-pointer text-center">
            {v("3")}
          </a>
        </li>
        <li className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md">
          <img
            src="/bus3.jpg"
            alt="microbus"
            className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
          />
          <a
            href="https://wa.me/+996509812222"
            target="_blank"
            className="font-semibold hover:underline transition duration-200 text-primary cursor-pointer text-center">
            {v("4")}
          </a>
        </li>
        <li className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md">
          <img
            src="/bus7.jpg"
            alt="microbus"
            className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
          />
          <a
            href="https://wa.me/+996509812222"
            target="_blank"
            className="font-semibold hover:underline transition duration-200 text-primary cursor-pointer text-center">
            {v("5")}
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Services;
