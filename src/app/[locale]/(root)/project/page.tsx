"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import project1 from "../../../../../public/imgs/project1.jpg";
import project2 from "../../../../../public/imgs/project2.jpg";
import project3 from "../../../../../public/imgs/project3.jpeg";
import project4 from "../../../../../public/imgs/project4.png";
import project5 from "../../../../../public/imgs/project5.jpg";
import project6 from "../../../../../public/imgs/project6.webp";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  const stats = [
    { label: t("stats.projects"), value: "120+" },
    { label: t("stats.warehouses"), value: "85+" },
    { label: t("stats.items"), value: "1.2M+" },
    { label: t("stats.accuracy"), value: "99.5%" },
  ];

  const projects = t.raw("projects") as {
    title: string;
    client: string;
    category: string;
    description: string;
    results: string[];
  }[];

  // Rasmlar massivini yaratamiz
  const projectImages = [project1, project2, project3, project4, project5, project6];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gray-50 py-16 mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("hero.subtitle")}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-indigo-600">
                {stat.value}
              </div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("recentProjects.title")}
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            {t("recentProjects.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={projectImages[index]}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {project.client} • {project.category}
                  </p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
