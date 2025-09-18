import { NewsCard } from './NewsCard';
import type { NewsItem } from '../types/news';

interface NewsListProps {
  news: NewsItem[];
}

export const NewsList = ({ news }: NewsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};
