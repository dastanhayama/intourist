import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LangSwitcher from "../components/LangSwitcher";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { getTranslations } from "next-intl/server";
import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${montserrat.className} flex  flex-col justify-center items-center relative w-full`}>
        <NextIntlClientProvider messages={messages}>
          <LangSwitcher />
          <Header />
          <HeaderMobile />
          {children}
          <Footer />
          <FooterEnd />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
