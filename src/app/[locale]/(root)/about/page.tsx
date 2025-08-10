'use client';

import { Eye, TargetIcon } from 'lucide-react';

export default function AboutPage() {

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="mt-24 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Kompaniyamiz haqida
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Biz saqlash va logistika operatsiyalarini optimallashtirish bo&apos;yicha ko&apos;p yillik tajribaga ega yetakchi ombor inventarizatsiyasi boshqaruv kompaniyasimiz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-blue-50 p-8 rounded-lg">
                            <div className="flex items-center mb-6">
                                <TargetIcon className="h-8 w-8 text-blue-600 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900">Bizning missiyamiz</h2>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Korxonalarga ombor operatsiyalarini optimallashtirish va xarajatlarni kamaytirish uchun yordam beradigan innovatsion inventarizatsiya boshqaruv yechimlarini taqdim etish.
                            </p>
                        </div>

                        <div className="bg-green-50 p-8 rounded-lg">
                            <div className="flex items-center mb-6">
                                <Eye className="h-8 w-8 text-green-600 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900">Bizning ko&apos;z o&apos;ngimiz</h2>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Ombor inventarizatsiyasi boshqaruvi texnologiyalari va xizmatlari bo&apos;yicha global lider bo&apos;lish
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-600">Mijozlar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                            <div className="text-gray-600">Yillik tajriba</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                            <div className="text-gray-600">Loyihalar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-gray-600">Qo&apos;llab-quvvatlash</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
