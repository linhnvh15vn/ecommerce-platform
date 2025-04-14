import { Navigate } from 'react-router';

import { useAuth } from '@/contexts/auth.context';

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <div>{/* Add your component content here */}</div>;
}
