"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const partners = [
  {
    image: "/logo/ayol.svg",
    title: "Ayol",
    link: "#",
  },
  {
    image: "/logo/logo.svg",
    title: "Logo",
    link: "#",
  },
  {
    image: "/logo/proservice.svg",
    title: "Proservice",
    link: "#",
  },
  {
    image: "/logo/Safe.svg",
    title: "Safe",
    link: "#",
  },
  {
    image: "/logo/vilz.svg",
    title: "Vilz",
    link: "#",
  },
];

export default function Partnyor() {
  const [isGradient, setIsGradient] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== "undefined") {
        setIsGradient(window.innerWidth > 550);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const minCount = 10;
  const repeatCount = Math.ceil(minCount / partners.length);
  const extendedPartners = Array(repeatCount).fill(partners).flat();

  return (
    <div className="md:py-16 pt-6 mb-6 overflow-visible">
      <article className="container text-center mb-10 px-4 sm:px-0">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-vk mb-2 text-[#3D445E]">
          Bizga ishongan kompaniyalar
        </h3>
      </article>

      <div className="max-w-[1600px] m-auto w-full space-y-6 overflow-visible max-md:pb-10">
        <div>
          {/* ➡️ Yuqori qatordagi marquee */}
          <Marquee
            direction="right"
            speed={20}
            gradient={isGradient}
            gradientColor="#ffffff"
            gradientWidth={80}
            pauseOnHover
            className="mb-[18px]"
          >
            {extendedPartners.map((img, index) => (
             <Link
             href={img.link}
             key={`left-${index}`}
             className="mx-2 sm:mx-[18px] border bg-gradient-to-br from-blue-50 to-indigo-100 border-gray-300/40 rounded-xl flex items-center justify-center h-[160px] sm:h-[100px] w-[140px] max-sm:h-[75px] sm:w-[180px] p-6"
           >
             <Image
               src={img.image}
               alt={img.title}
               className="object-contain h-full w-full"
               width={45}
               height={45}
             />
           </Link>
            ))}
          </Marquee>

          {/* ⬅️ Pastki qatordagi marquee */}
          <Marquee
            direction="left"
            speed={20}
            gradient={isGradient}
            gradientColor="#ffffff"
            gradientWidth={80}
            pauseOnHover
          >
            {extendedPartners
              .slice()
              .reverse()
              .map((img, index) => (
                <Link
                  href={img.link}
                  key={`left-${index}`}
                  className="mx-2 sm:mx-[18px] border bg-gradient-to-br from-blue-50 to-indigo-100 border-gray-300/40 rounded-xl flex items-center justify-center h-[160px] sm:h-[100px] w-[140px] max-sm:h-[75px] sm:w-[180px] p-6"
                >
                  <Image
                    src={img.image}
                    alt={img.title}
                    className="object-contain h-full w-full"
                    width={45}
                    height={45}
                  />
                </Link>
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
