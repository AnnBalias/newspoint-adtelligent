import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { type RegisterFormData } from '../schemas/auth';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Register data:', {
        name: data.name,
        email: data.email,
        password: '[HIDDEN]',
      });
      console.log('Full register data (for development):', data);
  
      navigate('/');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <RegisterForm onSubmit={onSubmit} isSubmitting={isSubmitting} />;
};