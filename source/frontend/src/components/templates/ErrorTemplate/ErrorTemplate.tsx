import { type ReactElement } from 'react';

type ErrorTemplateProps = {
  message?: string;
  onTryAgainClick?(): void;
};

export function ErrorTemplate({
  message = 'Something went wrong.',
  onTryAgainClick,
}: ErrorTemplateProps): ReactElement {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{message}</h1>
      {onTryAgainClick && (
        <button onClick={onTryAgainClick} type="button">
          Try Again
        </button>
      )}
    </div>
  );
}
