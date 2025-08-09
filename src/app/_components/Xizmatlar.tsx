import { Package, BarChart3, Settings, Zap, ArrowRight, CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function XizmatlarPage() {
  const services = [
    {
      icon: Package,
      title: "Inventarizatsiya boshqaruvi",
      titleEn: "Inventory Management",
      description: "To'liq inventarizatsiya kuzatuvi va boshqaruv yechimlari",
      descriptionEn: "Complete inventory tracking and management solutions",
      features: [
        "Real vaqtda zaxira kuzatuvi",
        "Avtomatik kam zaxira ogohlantirishlari",
        "Mahsulot harakati tarixini saqlash",
        "Barcode va QR kod qo'llab-quvvatlash",
        "Bir nechta ombor bilan ishlash"
      ],
      benefits: [
        "Zaxira yo'qotishlarini 90% gacha kamaytirish",
        "Buyurtma berish jarayonini avtomatlashtirish",
        "Mahsulot sifatini nazorat qilish"
      ],
      color: "blue",
      popular: false
    },
    {
      icon: BarChart3,
      title: "Tahlil va hisobot",
      titleEn: "Analysis and Reports",
      description: "Yaxshi qaror qabul qilish uchun batafsil tahlil va hisobot",
      descriptionEn: "Detailed analysis and reports for better decision making",
      features: [
        "Real vaqtda dashboard",
        "Moliyaviy hisobotlar",
        "Sotish tendentsiyalari tahlili",
        "ABC tahlil va kategoriyalash",
        "Excel/PDF formatda eksport"
      ],
      benefits: [
        "Ma'lumotlarga asoslangan qarorlar",
        "Biznes samaradorligini oshirish",
        "Xarajatlarni optimallashtirish"
      ],
      color: "green",
      popular: true
    },
    {
      icon: Settings,
      title: "Ombor optimallashtirish",
      titleEn: "Warehouse Optimization",
      description: "Omboringizning joylashuvi va operatsiyalarini optimallashtirishish",
      descriptionEn: "Optimizing your warehouse location and operations",
      features: [
        "Ombor joylashuvini rejalashtirish",
        "Mahsulot joylashtirish strategiyasi",
        "Ishchi kuchi samaradorligi tahlili",
        "Logistika marshrut optimallashtirish",
        "Xarajatlarni kamaytirish takliflari"
      ],
      benefits: [
        "Ombor samaradorligini 40% oshirish",
        "Operatsion xarajatlarni kamaytirish",
        "Mijozlar xizmatini yaxshilash"
      ],
      color: "purple",
      popular: false
    },
    {
      icon: Zap,
      title: "Avtomatlashtirilgan tizimlar",
      titleEn: "Automated Systems",
      description: "Samarali ombor operatsiyalari uchun avtomatlashtirilgan tizimlar",
      descriptionEn: "Automated systems for efficient warehouse operations",
      features: [
        "Avtomatik buyurtma berish",
        "Smart ogohlantirishlar tizimi",
        "Integratsiya boshqa tizimlar bilan",
        "Mobil ilovalar qo'llab-quvvatlash",
        "Cloud-based yechimlar"
      ],
      benefits: [
        "Qo'lda ish hajmini 80% kamaytirish",
        "Xatolarni minimallashtirishish",
        "24/7 avtomatik monitoring"
      ],
      color: "orange",
      popular: false
    }
  ]

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
            Xizmatlarimiz
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bizning{" "}
            <span className="text-blue-600">xizmatlarimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Biznesingizni rivojlantirish uchun to&apos;liq yechimlar to&apos;plami. Har bir xizmat sizning ehtiyojlaringizga moslashtirilgan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
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
                    {/* Icon */}
                    <div className={`w-12 h-12 ${colorClasses.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>

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
              Nega bizning xizmatlarimizni tanlashingiz kerak?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bizning xizmatlarimiz sizning biznesingizni yangi darajaga olib chiqish uchun mo&apos;ljallangan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Ishonchli</h4>
              <p className="text-gray-600">99.9% ishonchlilik va xavfsizlik kafolati</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">24/7 Qo&apos;llab-quvvatlash</h4>
              <p className="text-gray-600">Har doim sizning xizmatlaringizda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Samaradorlik</h4>
              <p className="text-gray-600">Biznes jarayonlarini 5x tezlashtirish</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bizning xizmatlarimizni sinab ko&apos;ring!
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Bepul konsultatsiya olish va sizning ehtiyojlaringizga mos yechimni tanlash uchun biz bilan bog&apos;laning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2">
                  Bepul konsultatsiya
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  Barcha xizmatlar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
