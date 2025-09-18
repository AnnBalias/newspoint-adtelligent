import newsData from '../data/news.json';
import type { NewsItem } from '../types/news';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const newsApi = {
  async getAllNews(): Promise<NewsItem[]> {
    await delay(100);
    return newsData as NewsItem[];
  },

  async getNewsById(id: string): Promise<NewsItem | null> {
    await delay(50);
    const news = (newsData as NewsItem[]).find(item => item.id === id);
    return news || null;
  }
};
