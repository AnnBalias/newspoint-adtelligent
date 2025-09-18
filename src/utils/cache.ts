import { QueryClient } from '@tanstack/react-query';
import { newsKeys } from '../hooks/useNews';

export class CacheManager {
  private queryClient: QueryClient;
  
  constructor(queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  invalidateAllNews() {
    return this.queryClient.invalidateQueries({
      queryKey: newsKeys.all,
    });
  }

  invalidateNewsItem(id: string) {
    return this.queryClient.invalidateQueries({
      queryKey: newsKeys.detail(id),
    });
  }

  async prefetchNews() {
    return this.queryClient.prefetchQuery({
      queryKey: newsKeys.lists(),
      queryFn: async () => {
        const { newsApi } = await import('../api/news');
        return newsApi.getAllNews();
      },
      staleTime: 5 * 60 * 1000,
    });
  }

  async prefetchNewsItem(id: string) {
    return this.queryClient.prefetchQuery({
      queryKey: newsKeys.detail(id),
      queryFn: async () => {
        const { newsApi } = await import('../api/news');
        return newsApi.getNewsById(id);
      },
      staleTime: 10 * 60 * 1000,
    });
  }

  clearAllCache() {
    return this.queryClient.clear();
  }

  getCacheStats() {
    const cache = this.queryClient.getQueryCache();
    const queries = cache.getAll();
    
    return {
      totalQueries: queries.length,
      activeQueries: queries.filter(q => q.state.status === 'pending').length,
      staleQueries: queries.filter(q => q.isStale()).length,
      freshQueries: queries.filter(q => !q.isStale()).length,
    };
  }

  optimizeCache() {
    const cache = this.queryClient.getQueryCache();
    const queries = cache.getAll();
    
    const thirtyMinutesAgo = Date.now() - 30 * 60 * 1000;
    
    queries.forEach(query => {
      if (query.state.dataUpdatedAt < thirtyMinutesAgo && !query.getObserversCount()) {
        cache.remove(query);
      }
    });
  }
}

export const createCacheManager = (queryClient: QueryClient) => {
  return new CacheManager(queryClient);
};
