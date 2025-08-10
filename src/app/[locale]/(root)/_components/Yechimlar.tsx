import { UserPlus, Building2, Package, ClipboardList, BarChart3, ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Ro'yxatdan o'tish",
      titleEn: "Registration",
      description: "Tizimga kirish uchun oddiy ro'yxatdan o'tish jarayoni",
      details: [
        "Email manzil va parol yaratish",
        "Kompaniya ma'lumotlarini kiritish",
        "Hisobni tasdiqlash"
      ],
      time: "2 daqiqa",
      color: "blue"
    },
    {
      number: "02",
      icon: Building2,
      title: "Omborlar va mahsulotlar qo'shish",
      titleEn: "Adding Warehouses and Products",
      description: "Omborlaringiz va mahsulotlaringizni tizimga qo'shish",
      details: [
        "Ombor joylashuvlarini belgilash",
        "Mahsulot katalogini yaratish",
        "Boshlang'ich zaxiralarni kiritish"
      ],
      time: "10 daqiqa",
      color: "green"
    },
    {
      number: "03",
      icon: Package,
      title: "Inventarizatsiya qilish",
      titleEn: "Inventory Management",
      description: "Real vaqtda zaxiralarni kuzatish va boshqarish",
      details: [
        "Mahsulotlar kirimi va chiqimi",
        "Avtomatik hisoblar yangilanishi",
        "Kam zaxira haqida ogohlantirishlar"
      ],
      time: "Doimiy",
      color: "purple"
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Hisobotlarni olish",
      titleEn: "Getting Reports",
      description: "Batafsil tahlil va hisobotlar bilan qarorlar qabul qiling",
      details: [
        "Sotish va zaxira hisobotlari",
        "Moliyaviy tahlillar",
        "Excel formatida eksport"
      ],
      time: "1 daqiqa",
      color: "orange"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-500 to-blue-600"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        gradient: "from-green-500 to-green-600"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-500 to-purple-600"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-500 to-orange-600"
      }
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ClipboardList className="w-4 h-4" />
            Qadamlar
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Yechimlar qanday{" "}
            <span className="text-blue-600">ishlaydi?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bizning tizimimizdan foydalanish juda oson. Faqat 4 ta oddiy qadamda boshlab yuboring!
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              {steps.slice(0, -1).map((_, index) => (
                <div key={index} className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 to-blue-300 mx-8"></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const colorClasses = getColorClasses(step.color)
              
              return (
                <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r ${colorClasses.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.number}
                    </div>
                    
                    <div className="pt-4">
                      {/* Icon */}
                      <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-2 mb-6">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Time */}
                      <div className={`inline-flex items-center gap-2 ${colorClasses.bg} ${colorClasses.text} px-3 py-1 rounded-full text-sm font-medium`}>
                        <Clock className="w-4 h-4" />
                        {step.time}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Nega aynan bizning yechimimiz?
              </h3>
              <p className="text-blue-100 mb-6">
                Oddiy 4 qadamda biznesingizni to&apos;liq avtomatlashtiring va samaradorlikni oshiring
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2">
                  Boshlab ko&apos;ring
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  Demo ko&apos;rish
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15 min</div>
                <div className="text-blue-100">O&apos;rnatish vaqti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Qo&apos;llab-quvvatlash</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Ishonchlilik</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Mamnun mijozlar</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Savollaringiz bormi?
          </h3>
          <p className="text-gray-600 mb-8">
            Eng ko&apos;p beriladigan savollar bo&apos;limiga qarang yoki to&apos;g&apos;ridan-to&apos;g&apos;ri biz bilan bog&apos;laning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              FAQ ko&apos;rish
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Bog&apos;lanish
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
