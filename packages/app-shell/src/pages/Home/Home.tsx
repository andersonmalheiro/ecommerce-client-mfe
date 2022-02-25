import React from 'react';
import { IHeaderProps } from 'shared-types';
import ErrorBoundary from '../../error-boundary';
import Fallback from '../../fallback';

const Header = React.lazy(
  () => import('shared_components/Header'),
) as React.FC<IHeaderProps>;

const Footer = React.lazy(() => import('shared_components/Footer'));

const Home = () => {
  document.title = 'MF - Home';

  return (
    <ErrorBoundary errorMessage="Components service unavailable">
      <React.Suspense fallback={<Fallback />}>
        <Header title="MF Home" />
      </React.Suspense>

      <h1>Home</h1>

      <React.Suspense fallback={<Fallback />}>
        <Footer />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Home;
