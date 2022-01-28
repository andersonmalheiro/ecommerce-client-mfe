import React from "react";
import ErrorBoundary from "../../error-boundary";
import Fallback from "../../fallback";

const RemoteComponentWrapper: React.FC<{ message: string }> = ({
  children,
  message,
}) => (
  <ErrorBoundary errorMessage={message}>
    <React.Suspense fallback={<Fallback />}>{children}</React.Suspense>
  </ErrorBoundary>
);

export default RemoteComponentWrapper;
