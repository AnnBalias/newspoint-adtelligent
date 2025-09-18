import { NewsList } from '../components/NewsList';
import { Loader } from '../components/Loader';
import { useNews } from '../hooks/useNews';

export function NewsPage() {
  const { data: news, isLoading, error } = useNews();

  if (isLoading) {
    return <Loader fullScreen size="lg" color="blue" />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Error loading news</h2>
            <p className="text-gray-600">Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsList news={news || []} />
      </div>
    </div>
  );
}
