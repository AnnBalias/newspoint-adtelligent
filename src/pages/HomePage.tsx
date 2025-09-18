import { Link } from 'react-router-dom';

export const HomePage = () => {

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="border-8 border-blue-600 rounded-full mb-8 w-80 h-80 flex flex-col items-center justify-center mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">NewsPoint</h1>
          <p className="text-lg text-gray-600 font-medium">In the center of events</p>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 mb-6">
            Please log in or register to continue
          </p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
