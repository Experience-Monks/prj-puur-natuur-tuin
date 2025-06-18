'use client';

import React from 'react';

type ErrorBoundaryProps = { children: React.ReactNode };
type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Initialize state as a class property instead of in constructor
  public state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo): void {
    this.setState({ hasError: true });

    // Optionally log error
    // eslint-disable-next-line no-console
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  public render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <div>Something went wrong rendering this section.</div>;
    }
    return children;
  }
}
