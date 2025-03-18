
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-secondary/20">
      <AuthForm />
    </div>
  );
};

export default Auth;
