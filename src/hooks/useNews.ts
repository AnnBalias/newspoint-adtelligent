import { useQuery } from '@tanstack/react-query';
import { newsApi } from '../api/news';

export const newsKeys = {
  all: ['news'] as const,
  lists: () => [...newsKeys.all, 'list'] as const,
  list: (filters: string) => [...newsKeys.lists(), { filters }] as const,
  details: () => [...newsKeys.all, 'detail'] as const,
  detail: (id: string) => [...newsKeys.details(), id] as const,
};

export const useNews = () => {
  return useQuery({
    queryKey: newsKeys.lists(),
    queryFn: newsApi.getAllNews,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });
};

export const useNewsItem = (id: string) => {
  return useQuery({
    queryKey: newsKeys.detail(id),
    queryFn: () => newsApi.getNewsById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });
};

