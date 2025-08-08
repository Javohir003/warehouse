import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react'

export default function FooterPage() {
  const navigationLinks = [
    { name: "Biz haqimizda", href: "#about" },
    { name: "Xizmatlar", href: "#services" },
    { name: "Yangiliklar", href: "#news" },
    { name: "Bog'lanish", href: "#contact" }
  ]

  const services = [
    { name: "Inventarizatsiya boshqaruvi", href: "#inventory" },
    { name: "Tahlil va hisobot", href: "#analytics" },
    { name: "Ombor optimallashtirish", href: "#optimization" },
    { name: "Avtomatlashtirilgan tizimlar", href: "#automation" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
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
                  <h3 className="text-xl font-bold">Warehouse Systems</h3>
                  <p className="text-sm text-gray-400">Consulting</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Biznesingizni rivojlantirish uchun zamonaviy ombor boshqaruv yechimlari va professional konsalting xizmatlari.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+998901234567" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  +998 (90) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@warehousesystems.uz" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  info@warehousesystems.uz
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <p className="text-sm text-gray-300">
                  Toshkent sh., Yunusobod tumani,<br />
                  Amir Temur ko'chasi 108
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Sahifalar</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Xizmatlar</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Bog'lanish</h4>
            {/* Social Media */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Ijtimoiy tarmoqlarda kuzating</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.507-1.123 1.507-1.123 1.507s-.302 0-.604-.302L12.5 14.5l-1.813 1.507s-.302.302-.604.302-.604-.302-.604-.302L8.5 14.5l-2.445 1.593s-.302.302-.604 0-.302-.604-.302-.604.169-1.507.896-6.728c.302-1.507 1.123-1.507 1.123-1.507s.302 0 .604.302L12 9.5l4.228-1.944s.302-.302.604-.302.604.302.604.302.169 1.507-.868 6.728z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025 Warehouse Systems Consulting. Barcha huquqlar himoyalangan.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">
                Maxfiylik siyosati
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-300">
                Foydalanish shartlari
              </a>
              <a href="#cookies" className="hover:text-white transition-colors duration-300">
                Cookie siyosati
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </footer>
  )
}
