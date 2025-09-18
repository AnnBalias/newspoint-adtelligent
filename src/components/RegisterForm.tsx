import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserIcon } from '../assets/icons';
import { Button, Card, Input  } from './';
import { type RegisterFormData, registerSchema } from '../schemas/auth';
import { useId } from "react";

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  isSubmitting?: boolean;
}

export const RegisterForm = ({ onSubmit, isSubmitting = false }: RegisterFormProps) => {
  
  const termsId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Join NewsPoint</h2>
          <p className="text-gray-600 mb-6">Create your account to get started</p>
        </div>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <Input
                label="Full name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                error={errors.name?.message}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register('name')}
              />

              <Input
                label="Email address"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                error={errors.email?.message}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register('email')}
              />

              <Input
                label="Password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a strong password"
                error={errors.password?.message}
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register('password')}
              />
            </div>

            <div className="flex items-center">
              <input
                id={termsId}
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Create account
            </Button>
          </form>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
