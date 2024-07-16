"use client";
import React, { useCallback } from "react";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const cars = [
  {
    id: 0,
    imgUrl: "/bus0.jpg",
  },
  {
    id: 1,
    imgUrl: "/bus1.jpg",
  },
  {
    id: 2,
    imgUrl: "/bus2.jpg",
  },
  {
    id: 3,
    imgUrl: "/bus3.jpg",
  },
  {
    id: 4,
    imgUrl: "/bus4.jpg",
  },
  {
    id: 5,
    imgUrl: "/bus5.jpg",
  },
  {
    id: 6,
    imgUrl: "/bus6.jpg",
  },
  {
    id: 7,
    imgUrl: "/bus7.jpg",
  },
  {
    id: 8,
    imgUrl: "/bus8.jpg",
  },
  {
    id: 9,
    imgUrl: "/van1.jpeg",
  },
  {
    id: 10,
    imgUrl: "/van2.jpeg",
  },
  {
    id: 11,
    imgUrl: "/van3.jpg",
  },
  {
    id: 12,
    imgUrl: "/van4.jpg",
  },
];

function Cars() {
  const t = useTranslations("Header");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <section
      id="cars"
      className="w-full h-auto flex flex-col justify-center items-center gap-8 py-8 px-6 md:px-[200px]  max-w-[1440px]">
      <h3 className="text-xl font-bold uppercase text-primary">
        {t("cars-link")}
      </h3>
      <div className="embla">
        <div
          className="embla__viewport w-full md:h-[70vh] h-[220px]"
          ref={emblaRef}>
          <div className="embla__container h-full">
            {cars.map((car) => (
              <a
                href="https://wa.me/+996509812222"
                target="_blank"
                key={car.id}
                className="embla__slide  items-center justify-center cursor-pointer">
                <img
                  src={car.imgUrl}
                  alt={`${car.id}`}
                  className="w-full h-full object-contain "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <button className="text-accent" onClick={scrollPrev}>
          <FaArrowAltCircleLeft size={50} />
        </button>
        <button className="text-accent" onClick={scrollNext}>
          <FaArrowAltCircleRight size={50} />
        </button>
      </div>
      {/* <ul className="w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {cars.map((car) => (
          <a
            href="https://wa.me/+996509812222"
            target="_blank"
            key={car.id}
            className="col-span-1 flex flex-col gap-4 items-center justify-center rounded-md cursor-pointer">
            <img
              src={car.imgUrl}
              alt={`${car.id}`}
              className="w-full md:h-[300px] h-[220px] object-cover rounded-md"
            />
          </a>
        ))}
      </ul> */}
    </section>
  );
}

export default Cars;
