import { NewsList } from '../components/NewsList';
import newsData from '../data/news.json';
import type { NewsItem } from '../types/news';

export function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsList news={newsData as NewsItem[]} />
      </div>
    </div>
  );
}
