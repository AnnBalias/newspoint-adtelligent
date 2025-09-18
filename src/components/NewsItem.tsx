import { Link } from 'react-router-dom';
import type { NewsItem } from '../types/news';

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time dateTime={news.date}>
            {new Date(news.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {news.title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {news.preview}
        </p>
        
        <Link
          to={`/news/${news.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};
