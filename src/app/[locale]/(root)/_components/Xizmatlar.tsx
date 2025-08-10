import { Settings, ArrowRight, CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useTranslations } from "next-intl";

interface Service {
  color: string;
  popular?: boolean;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

export default function XizmatlarPage() {
  const t = useTranslations("servicesPage");

  // services ni Service[] tipida e'lon qilamiz
  const services: Service[] = t.raw("services") as Service[];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-500 to-blue-600",
        hover: "hover:border-blue-300"
      },
      green: {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        gradient: "from-green-500 to-green-600",
        hover: "hover:border-green-300"
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-500 to-purple-600",
        hover: "hover:border-purple-300"
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-500 to-orange-600",
        hover: "hover:border-orange-300"
      }
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4" />
            {t("badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("title")}{" "}
            <span className="text-blue-600">{t("title2")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color)

            return (
              <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 border-2 ${colorClasses.border} ${colorClasses.hover} ${colorClasses.bg}`}>
                {service.popular && (
                  <div className="absolute -top-2 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Mashhur
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="text-center">
                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Xususiyatlar:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-xs text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Afzalliklar:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-xs text-gray-600">
                              <TrendingUp className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/services">
                        <button className={`w-full bg-gradient-to-r ${colorClasses.gradient} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group text-sm`}>
                          Batafsil
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t("title3")}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("description2")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t("title4")}</h4>
              <p className="text-gray-600">{t("description3")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t("title5")}</h4>
              <p className="text-gray-600">{t("description4")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t("title6")}</h4>
              <p className="text-gray-600">{t("description5")}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("title7")}
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {t("description6")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2">
                  {t("freeConsultation")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  {t("allServices")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
