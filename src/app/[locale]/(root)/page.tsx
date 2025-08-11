import { ArrowRight } from "lucide-react";
import Link from "next/link";
import XizmatlarPage from "./_components/Xizmatlar";
import ClientLogos from "./_components/ClientPage";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home.hero");
  const locale = useLocale()

  return (
    <div>
      <div
        className="relative pt-[170px] h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/imgs/HomeBG.avif')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content */}
        <div className="relative z-10 container">
          <article className="text-center text-white mt-[-100px]">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t("subtitle")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t("startButton")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </article>
        </div>
      </div>
      <div>
        <XizmatlarPage />
        <ClientLogos />
      </div>
    </div>
  );
}
