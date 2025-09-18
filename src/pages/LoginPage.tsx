import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { type LoginFormData } from '../schemas/auth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Login data:', { email: data.email, password: '[HIDDEN]' });
      console.log('Full login data (for development):', data);
      navigate('/news');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting} />;
};