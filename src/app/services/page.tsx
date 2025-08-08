'use client';

import { Package, BarChart3, Shield, Zap, CheckCircle } from 'lucide-react';

export default function ServicesPage() {

    const services = [
        {
            icon: Package,
            title: 'Inventarizatsiya',
            description: 'Mahsulotlaringiz zaxirasini real vaqt rejimida nazorat qilish va boshqarish tizimi.',
            features: [
                'Real vaqtli zaxira monitoringi',
                'Avtomatik zaxira tugash ogohlantirishlari',
                'Shtrix-kod orqali skanerlash',
                'Bir nechta filiallarni qo‘llab-quvvatlash'
            ]
        },
        {
            icon: BarChart3,
            title: 'Tahlil',
            description: 'Omborxona samaradorligini baholash uchun chuqur tahlillar va hisobotlar.',
            features: [
                'Ilg‘or hisobotlar',
                'Ishlash ko‘rsatkichlari',
                'Prognozli tahlillar',
                'Moslashtirilgan boshqaruv panellari'
            ]
        },
        {
            icon: Shield,
            title: 'Omborxona',
            description: 'Ombor joylashuvi, ish jarayonlarini optimallashtirish va xavfsizlikni ta’minlash.',
            features: [
                'Joylashuvni optimallashtirish',
                'Ish jarayonlarini yaxshilash',
                'Bo‘sh joydan unumli foydalanish',
                'Xavfsizlik standartlariga rioya qilish'
            ]
        },
        {
            icon: Zap,
            title: 'Avtomatlashtirish',
            description: 'Ombor ish jarayonlarini avtomatlashtirish orqali samaradorlikni oshiring.',
            features: [
                'Avtomatik saralash tizimlari',
                'Robototexnika tizimlari',
                'AI asosida optimallashtirish',
                'Tizimlar bilan integratsiya imkoniyati'
            ]
        }

    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="mt-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Bizning xizmatlarimiz
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Professional warehouse management solutions tailored to your business needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-center mb-6">
                                    <service.icon className="h-10 w-10 text-blue-600 mr-4" />
                                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6 text-lg">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
