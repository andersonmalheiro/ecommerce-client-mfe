import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RequireAuth: React.FC = ({ children }) => {
  const { authState } = useAuth();

  if (!authState) {
    return null;
  }

  if (authState === 'checking') {
    return <div>checking...</div>;
  }

  if (authState === 'not-authenticated') {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default RequireAuth;
