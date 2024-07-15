import React from "react";
import { useTranslations } from "next-intl";

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
];

function Cars() {
  const t = useTranslations("Header");

  return (
    <section
      id="cars"
      className="w-full h-auto flex flex-col justify-center items-center gap-8 py-8 px-6 md:px-[200px]  max-w-[1440px]">
      <h3 className="text-xl font-bold uppercase text-primary">
        {t("cars-link")}
      </h3>
      <ul className="w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
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
      </ul>
    </section>
  );
}

export default Cars;
