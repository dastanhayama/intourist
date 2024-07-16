"use client";
import React from "react";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoStarSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Testimonials() {
  const t = useTranslations("Testimonials");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const users = ["Ivan", "Michael", "Aruujan", "Zhanna", "Dmitrij", "Jake"];
  const dates = [
    "23.04.2023",
    "07.07.2023",
    "12.10.2022",
    "04.02.2024",
    "23.03.2024",
    "16.08.2023",
  ];
  let a = [0, 1, 2, 3, 4, 5];
  return (
    <section className="w-full h-auto flex flex-col gap-8 md:gap-4 justify-center items-center py-6 px-6 md:px-[200px] max-w-[1440px]">
      <h3 className="text-xl font-bold uppercase text-primary text-center">
        {t("title")}
      </h3>
      <div className="embla w-full h-auto" ref={emblaRef}>
        <div className="embla__container w-full h-auto">
          {a.map((item) => (
            <div
              key={item}
              className="embla__slide flex flex-col gap-4 md:w-1/2 w-full h-auto bg-gray-300 p-8">
              <div className="flex items-center text-yellow-500">
                <IoStarSharp size={25} />
                <IoStarSharp size={25} />
                <IoStarSharp size={25} />
                <IoStarSharp size={25} />
                <IoStarSharp size={25} />
              </div>
              <p className="text-justify text-primary pb-12">{t(`${item}`)}</p>
              <div className="flex items-center gap-4">
                <span className="rounded-full w-[70px] h-[70px] bg-red-400 text-white flex items-center justify-center">
                  <FaUser size={40} />
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-primary font-semibold">{users[item]}</p>
                  <p className="text-primary">{dates[item]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
