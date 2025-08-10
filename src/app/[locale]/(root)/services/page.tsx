'use client';

import { Package, BarChart3, Shield, Zap, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
    const t = useTranslations('services');

    const icons = [Package, BarChart3, Shield, Zap];
    const services = t.raw('list') as {
        title: string;
        description: string;
        features: string[];
    }[];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="mt-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {t('hero.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => {
                            const Icon = icons[index];
                            return (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-center mb-6">
                                        <Icon className="h-10 w-10 text-blue-600 mr-4" />
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
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
