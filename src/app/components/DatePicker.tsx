"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import moment from "moment";

function DatePicker() {
  const t = useTranslations("Date");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [car, setCar] = useState("Minivan");
  const [address, setAddress] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (date.length !== 0 && time.length !== 0) {
      let c = moment(date).format("DD/MM/YYYY");
      window.open(
        `https://wa.me/+996509812222?text=${t("Whatsapp")} ${car}, ${t(
          "address"
        )}: ${address}, ${t("time2")}: ${c} ${time}`,
        "_blank"
      );
    }
  };
  return (
    <section
      id="book"
      className="w-full h-auto flex flex-col justify-center items-center gap-8 pt-8 pb-24 px-6 md:px-[200px]  max-w-[1440px]">
      <h1 className="text-xl font-bold uppercase text-primary text-center">
        {t("title")}
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <label htmlFor="date">{t("date")}</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none cursor-pointer w-[200px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <label htmlFor="time">{t("time")}</label>
        <input
          type="time"
          id="time"
          min={new Date().toISOString().split("T")[0]}
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none cursor-pointer w-[200px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <label htmlFor="address">{t("address")}</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none cursor-pointer w-[200px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <label htmlFor="car">{t("car")}</label>
        <select
          name="select"
          defaultValue={car}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none cursor-pointer w-[200px]"
          onChange={(e) => setCar(e.target.value)}>
          <option value="Minivan">Minivan</option>
          <option value="Mercedes Benz Sprinter">Mercedes Benz Sprinter</option>
        </select>
      </div>
      <button
        disabled={
          time.length === 0 ||
          date.length === 0 ||
          car.length === 0 ||
          address.length === 0
        }
        onClick={handleSubmit}
        className="py-2 px-4 rounded-md bg-accent text-primary font-semibold disabled:bg-gray-300 disabled:text-gray-500 w-[200px]">
        {t("button")}
      </button>
    </section>
  );
}

export default DatePicker;
