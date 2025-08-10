'use client'

import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function FooterPage() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t('company.name')}</h3>
                  <p className="text-sm text-gray-400">{t('company.tagline')}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('company.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${t('contact.phone')}`} className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  {t('contact.phone')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${t('contact.email')}`} className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  {t('contact.email')}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <p className="text-sm text-gray-300 whitespace-pre-line">{t('contact.address')}</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('nav.title')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href={t('nav.link1.href')} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                  {t('nav.link1.name')}
                </Link>
              </li>
              <li>
                <Link href={t('nav.link2.href')} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                  {t('nav.link2.name')}
                </Link>
              </li>
              <li>
                <Link href={t('nav.link3.href')} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                  {t('nav.link3.name')}
                </Link>
              </li>
              <li>
                <Link href={t('nav.link4.href')} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                  {t('nav.link4.name')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('services.title')}</h4>
            <ul className="space-y-3">
              <li>
                <a href={t('services.link1.href')} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                  {t('services.link1.name')}
                </a>
              </li>
              <li>
                <a href={t('services.link2.href')} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                  {t('services.link2.name')}
                </a>
              </li>
              <li>
                <a href={t('services.link3.href')} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                  {t('services.link3.name')}
                </a>
              </li>
              <li>
                <a href={t('services.link4.href')} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                  {t('services.link4.name')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('connect.title')}</h4>
            <p className="text-gray-400 text-sm mb-4">{t('connect.follow')}</p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label={t('connect.social.instagram')}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                aria-label={t('connect.social.youtube')}
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              {t('bottom.copyright')}
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">
                {t('bottom.privacy')}
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-300">
                {t('bottom.terms')}
              </a>
              <a href="#cookies" className="hover:text-white transition-colors duration-300">
                {t('bottom.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    </footer>
  )
}
