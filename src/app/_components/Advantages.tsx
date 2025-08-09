import { Calculator, Smartphone, Shield, Users, Warehouse, CheckCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function AfzalliklarPage() {
    const advantages = [
        {
            icon: Calculator,
            title: "Tez va aniq hisob-kitob",
            titleEn: "Fast and Accurate Calculations",
            description: "Avtomatik hisob-kitoblar va real vaqtda natijalar olish imkoniyati",
            descriptionEn: "Automated calculations with real-time results"
        },
        {
            icon: Smartphone,
            title: "Mobil moslashuvchanlik",
            titleEn: "Mobile Adaptability",
            description: "Har qanday qurilmada mukammal ishlash va responsive dizayn",
            descriptionEn: "Perfect performance on any device with responsive design"
        },
        {
            icon: Shield,
            title: "Xavfsiz va ishonchli ma'lumotlar",
            titleEn: "Safe and Reliable Data",
            description: "Yuqori darajadagi xavfsizlik va ma'lumotlarni himoya qilish",
            descriptionEn: "High-level security and data protection"
        },
        {
            icon: Users,
            title: "Foydalanishga qulay interfeys",
            titleEn: "User-Friendly Interface",
            description: "Intuitiv va oson o'rganiladigan interfeys dizayni",
            descriptionEn: "Intuitive and easy-to-learn interface design"
        },
        {
            icon: Warehouse,
            title: "Bir nechta omborlar bilan ishlash",
            titleEn: "Multi-Warehouse Management",
            description: "Bir nechta omborlarni bir joydan boshqarish imkoniyati",
            descriptionEn: "Manage multiple warehouses from a single location"
        }
    ]

    return (
        <section className="py-16 px-4 ">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <CheckCircle className="w-4 h-4" />
                        Afzalliklar
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nima uchun bizni{" "}
                        <span className="text-blue-600">tanlashingiz kerak?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Bizning tizimimiz boshqa yechimlardan ustun turuvchi xususiyatlarga ega
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {advantages.map((advantage, index) => {
                        const IconComponent = advantage.icon
                        return (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                                <CardContent className="p-8">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                            <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {advantage.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {advantage.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Stats Section */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                            <div className="text-gray-600 font-medium">Ishonchlilik</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Qo&apos;llab-quvvatlash</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">500+</div>
                            <div className="text-gray-600 font-medium">Mamnun mijozlar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">5x</div>
                            <div className="text-gray-600 font-medium">Tezroq ishlash</div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Bugunoq omboringizni avtomatlashtirishga kirishing!

                        </h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Mahsulotlaringizni aniq, tez va samarali hisoblash uchun biz sizning omboringizga moslashtirilgan inventarizatsiya tizimini yaratib, o‘rnatib beramiz.            </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                                Bepul konsultatsiya oling
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                                Biz bilan bog‘laning
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
