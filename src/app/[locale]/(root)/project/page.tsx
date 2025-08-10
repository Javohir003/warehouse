'use client';

import { Building2, CheckCircle } from 'lucide-react';

export default function PortfolioPage() {
    const projects = [
        {
            title: "Yirik savdo kompaniyasi inventarizatsiyasi",
            client: "ABC Distribution",
            category: "Savdo",
            description: "15,000 m² omborxonada to'liq inventarizatsiya o'tkazish va jarayon optimallashtirish",
            results: ["99.8% aniqlik", "30% vaqt tejamkorligi", "Xarajatlar 25% kamaygan"],
            image: "bg-blue-500"
        },
        {
            title: "Oziq-ovqat mahsulotlari auditi",
            client: "Food Market Chain",
            category: "Oziq-ovqat",
            description: "7 ta do'kon va omborxonalarida inventarizatsiya va xavfsizlik auditi",
            results: ["100% hisobot aniqligi", "HACCP standartlariga muvofiqlik", "Yo'qotishlar 40% kamaygan"],
            image: "bg-green-500"
        },
        {
            title: "Farmatsevtika kompaniyasi auditi",
            client: "PharmaCorp",
            category: "Farmatsevtika",
            description: "Dori vositalari omborini audit qilish va GMP standartlariga muvofiqlikni tekshirish",
            results: ["GMP sertifikati olish", "Yo'qotishlar 0.1% gacha kamaytirish", "Samaradorlik 50% oshirish"],
            image: "bg-purple-500"
        },
        {
            title: "Tekstil korxonasi inventarizatsiyasi",
            client: "Textile Industries",
            category: "Tekstil",
            description: "10,000 m² omborxonada mato va tayyor mahsulotlar inventarizatsiyasi",
            results: ["95% aniqlik", "Jarayonlar 20% tezlashtirish", "Xarajatlar 15% tejash"],
            image: "bg-orange-500"
        },
        {
            title: "Avtomobil ehtiyot qismlari auditi",
            client: "Auto Parts Ltd",
            category: "Avtomobil",
            description: "Avtomobil ehtiyot qismlari omborini to'liq auditi va kataloglashtirish",
            results: ["50,000+ mahsulot kataloglangan", "Qidiruv tizimi 70% yaxshilangan", "Yo'qotishlar 35% kamaygan"],
            image: "bg-red-500"
        },
        {
            title: "Elektronika do'koni inventarizatsiyasi",
            client: "Tech Store Network",
            category: "Elektronika",
            description: "12 ta elektronika do'konlarida inventarizatsiya va narxlash tizimini optimallashtirish",
            results: ["Real vaqt inventarizatsiya", "Narxlar 100% aniq", "Sotuvlar 25% oshgan"],
            image: "bg-indigo-500"
        }
    ];

    const stats = [
        { number: "500+", label: "Muvaffaqiyatli loyihalar" },
        { number: "1000+", label: "Inventarizatsiya qilingan omborxonalar" },
        { number: "50M+", label: "Hisoblangan tovarlar" },
        { number: "99.9%", label: "O'rtacha aniqlik darajasi" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="mt-24 bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Bizning loyihalarimiz
                        </h1>
                        <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                            Turli sohalarda muvaffaqiyatli bajarilgan inventarizatsiya va audit loyihalari
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            So&apos;nggi loyihalarimiz
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Har bir loyiha bizning professional yondashuvimiz va yuqori sifatli xizmat ko&apos;rsatish qobiliyatimizni aks ettiradi
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className={`${project.image} h-48 flex items-center justify-center`}>
                                    <Building2 className="h-16 w-16 text-white" />
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-gray-900 text-sm">Natijalar:</h4>
                                        {project.results.map((result, resultIndex) => (
                                            <div key={resultIndex} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                <span className="text-sm text-gray-700">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}