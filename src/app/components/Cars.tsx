import React from "react";
import { useTranslations } from "next-intl";

function Cars() {
  const t = useTranslations("Header");
  const v = useTranslations("Services");

  return (
    <section
      id="cars"
      className="w-full h-auto flex flex-col justify-center items-center gap-8 py-8 px-6 md:px-[200px]  max-w-[1440px]">
      <h3 className="text-xl font-bold uppercase text-primary">
        {t("cars-link")}
      </h3>
      <ul className="w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        <li className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md">
          <img
            src="/microbus.jpg"
            alt="microbus"
            className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
          />
          <p className="font-semibold hover:underline transition duration-200 text-primary cursor-pointer">
            {v("1")}
          </p>
        </li>
        <li className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md">
          <img
            src="/microbus.jpg"
            alt="microbus"
            className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
          />
          <p className="font-semibold hover:underline transition duration-200 text-primary cursor-pointer">
            {v("2")}
          </p>
        </li>
        <li className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md">
          <img
            src="/microbus.jpg"
            alt="microbus"
            className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
          />
          <p className="font-semibold hover:underline transition duration-200 text-primary cursor-pointer">
            {v("3")}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Cars;
