
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

type ArticleType = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  featured: boolean;
};

export default function NewsPage() {
  const t = useTranslations('news');

  // Massivni JSONdan olish
  const articles = t.raw('articles') as ArticleType[];

  const featuredNews = articles.filter(article => article.featured);
  const regularNews = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mt-24 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('featuredTitle')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredNews.map(article => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
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

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{article.title}</h3>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('allTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map(article => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-32 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
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
