import { SpinnerIcon } from '../assets/icons';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'blue' | 'gray';
  fullScreen?: boolean;
  className?: string;
}

export const Loader = ({ 
  size = 'md', 
  color = 'blue', 
  fullScreen = false,
  className = ''
}: LoaderProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  const colorClasses = {
    white: 'text-white',
    blue: 'text-blue-600',
    gray: 'text-gray-600'
  };

  const containerClasses = fullScreen 
    ? 'flex items-center justify-center min-h-[calc(100vh-4rem)]'
    : 'flex items-center justify-center';

  const content = (
    <div className={`${containerClasses} ${className}`}>
      <div className="text-center">
        <SpinnerIcon className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} mx-auto mb-2`} />
      </div>
    </div>
  );

  return content;
};
