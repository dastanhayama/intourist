"use client";
import React from "react";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

function LangSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <div className="w-full h-auto flex justify-end items-center py-1 px-6 md:px-[200px]  bg-white max-w-[1440px]">
      <label className="flex gap-4 items-center" htmlFor="select">
        <select
          name="select"
          defaultValue={localActive}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none cursor-pointer"
          onChange={onSelectChange}
          disabled={isPending}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </label>
    </div>
  );
}

export default LangSwitcher;
