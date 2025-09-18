import { useParams, Link, Navigate } from 'react-router-dom';
import newsData from '../data/news.json';
import type { NewsItem } from '../types/news';

export function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  const news = (newsData as NewsItem[]).find(item => item.id === id);
  
  if (!news) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to News
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <time dateTime={news.date}>
                {new Date(news.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
