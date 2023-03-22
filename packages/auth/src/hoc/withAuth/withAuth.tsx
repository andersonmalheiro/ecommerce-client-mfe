import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function withAuth(WrappedComponent: ComponentType) {
  return () => {
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

    return (
      <>
        <WrappedComponent />
      </>
    );
  };
}
