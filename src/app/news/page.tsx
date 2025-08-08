'use client';

import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export default function NewsPage() {
    const news = [
        {
            id: 1,
            title: "Yangi inventarizatsiya texnologiyasi joriy etildi",
            excerpt: "Kompaniyamiz RFID texnologiyasiga asoslangan yangi inventarizatsiya tizimini ishga tushirdi. Bu texnologiya inventarizatsiya jarayonini 70% tezlashtiradi.",
            content: "Zamonaviy RFID texnologiyasi yordamida endi inventarizatsiya jarayoni ancha tez va aniq amalga oshiriladi. Yangi tizim real vaqt rejimida ma'lumotlarni yangilaydi va xatolar ehtimolini minimal darajaga tushiradi.",
            date: "2024/01/15",
            author: "Akmal Karimov",
            category: "Texnologiya",
            readTime: "5 daqiqa",
            featured: true
        },
        {
            id: 2,
            title: "O'zbekistonda ombor boshqaruvi standartlari yangilandi",
            excerpt: "Davlat tomonidan ombor boshqaruvi va inventarizatsiya bo'yicha yangi standartlar tasdiqlandi. Biz mijozlarimizga yangi talablarga muvofiqlik ta'minlashda yordam beramiz.",
            content: "Yangi standartlar ombor xavfsizligi, mahsulot sifati nazorati va hisobot berish tartiblarini yanada qattiqlashtirdi. Kompaniyamiz barcha mijozlarini yangi talablarga tayyorlashda ko'mak beradi.",
            date: "2024/01/10",
            author: "Nilufar Abdullayeva",
            category: "Qonunchilik",
            readTime: "7 daqiqa",
            featured: true
        },
        {
            id: 3,
            title: "Katta loyiha muvaffaqiyatli yakunlandi",
            excerpt: "50,000 m² maydonli yirik logistika markazida inventarizatsiya loyihasi muvaffaqiyat bilan yakunlandi. Loyiha davomida 99.8% aniqlik ko'rsatkichiga erishildi.",
            content: "Uch oylik intensiv ish natijasida yirik logistika markazining to'liq inventarizatsiyasi amalga oshirildi. Loyiha davomida zamonaviy texnologiyalar qo'llanildi va yuqori sifat ko'rsatkichlari ta'minlandi.",
            date: "2024/01/05",
            author: "Bobur Yusupov",
            category: "Loyihalar",
            readTime: "4 daqiqa",
            featured: false
        },
        {
            id: 4,
            title: "Yangi xodimlar uchun o'quv dasturi boshlandi",
            excerpt: "Kompaniyamizda yangi mutaxassislar uchun maxsus o'quv dasturi ishga tushirildi. Dastur zamonaviy inventarizatsiya usullari va texnologiyalarini o'z ichiga oladi.",
            content: "6 oylik o'quv dasturi nazariy va amaliy mashg'ulotlarni o'z ichiga oladi. Kursni muvaffaqiyatli tugatgan mutaxassislar xalqaro sertifikat olish imkoniyatiga ega bo'ladilar.",
            date: "2023/12/28",
            author: "Malika Toshmatova",
            category: "Ta'lim",
            readTime: "3 daqiqa",
            featured: false
        },
        {
            id: 5,
            title: "Farmatsevtika sohasida yangi xizmatlar",
            excerpt: "Dori vositalari omborlarini audit qilish bo'yicha maxsus xizmatlar ishlab chiqildi. Xizmatlar GMP va GDP standartlariga to'liq muvofiq.",
            content: "Farmatsevtika sohasi uchun maxsus ishlab chiqilgan audit dasturlari dori vositalari saqlanishi va tarqatilishining barcha bosqichlarini qamrab oladi.",
            date: "2023/12/20",
            author: "Zarina Mirzayeva",
            category: "Xizmatlar",
            readTime: "6 daqiqa",
            featured: false
        },
        {
            id: 6,
            title: "Yil yakunlari: 2023 yildagi yutuqlarimiz",
            excerpt: "2023 yilda kompaniyamiz 150+ loyihani muvaffaqiyat bilan amalga oshirdi va 50+ yangi mijoz bilan hamkorlik boshladi.",
            content: "O'tgan yil kompaniyamiz uchun muvaffaqiyatli yil bo'ldi. Yangi texnologiyalar joriy etildi, jamoa kengaytirildi va xizmatlar sifati yanada oshirildi.",
            date: "2023/12/31",
            author: "Akmal Karimov",
            category: "Kompaniya yangiliklari",
            readTime: "8 daqiqa",
            featured: false
        }
    ];

    
    const featuredNews = news.filter(item => item.featured);
    const regularNews = news.filter(item => !item.featured);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="mt-24 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Yangiliklar va maqolalar
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                            Ombor boshqaruvi, inventarizatsiya va logistika sohasidagi so&apos;nggi yangiliklar
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured News */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Asosiy yangiliklar
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {featuredNews.map((article) => (
                            <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-48 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <Calendar className="h-16 w-16 mx-auto mb-4" />
                                        <span className="text-sm font-medium">{article.category}</span>
                                    </div>
                                </div>
                                
                                <div className="p-8">
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>{new Date(article.date).toLocaleDateString('uz-UZ')}</span>
                                        <span className="mx-2">•</span>
                                        <User className="h-4 w-4 mr-2" />
                                        <span>{article.author}</span>
                                        <span className="mx-2">•</span>
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>{article.readTime}</span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {article.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-6">
                                        {article.excerpt}
                                    </p>
                                    
                                    <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300">
                                        Batafsil o&apos;qish
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All News */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Barcha yangiliklar
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularNews.map((article) => (
                            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-32 flex items-center justify-center">
                                    <Calendar className="h-8 w-8 text-white" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <User className="h-3 w-3 mr-1" />
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            <span>{new Date(article.date).toLocaleDateString('uz-UZ')}</span>
                                        </div>
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