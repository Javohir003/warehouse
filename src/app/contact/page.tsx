import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mt-16 sm:mt-20 md:mt-24 bg-gradient-to-r from-green-900 to-green-700 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Biz bilan bog&apos;lanish
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Har qanday savol va takliflaringiz uchun biz bilan bog&apos;laning
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
            Aloqa ma&apos;lumotlari
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
            <div className="flex items-start w-full max-w-xs">
              <Phone className="h-6 w-6 text-green-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Telefon</h3>
                <p className="text-gray-600 text-sm sm:text-base">+998 (71) 123-45-67</p>
                <p className="text-gray-600 text-sm sm:text-base">+998 (90) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-start w-full max-w-xs">
              <Mail className="h-6 w-6 text-green-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base">info@audit-sklad.uz</p>
                <p className="text-gray-600 text-sm sm:text-base">support@audit-sklad.uz</p>
              </div>
            </div>

            <div className="flex items-start w-full max-w-xs">
              <MapPin className="h-6 w-6 text-green-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Manzil</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Toshkent shahar, Yunusobod tumani,
                  <br />
                  Amir Temur shox ko&apos;chasi, 108-uy
                </p>
              </div>
            </div>

            <div className="flex items-start w-full max-w-xs">
              <Clock className="h-6 w-6 text-green-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Ish vaqti</h3>
                <p className="text-gray-600 text-sm sm:text-base">Dushanba - Juma: 9:00 - 18:00</p>
                <p className="text-gray-600 text-sm sm:text-base">Shanba: 9:00 - 14:00</p>
                <p className="text-gray-600 text-sm sm:text-base">Yakshanba: Dam olish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3635981543237!2d69.27977631542766!3d41.31115817927149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0x7a4e6e5e8f6f2a1c!2sAmir%20Temur%20Avenue%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1635789876543!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Our Location"
            className="w-full rounded-lg sm:height-400 md:height-500"
          ></iframe>
        </div>
      </section>
    </div>
  );
}