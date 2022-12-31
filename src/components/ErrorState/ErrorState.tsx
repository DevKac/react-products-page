import './ErrorState.scss';

interface ErrorStateProps {
  errorMsg?: string;
}

function ErrorState({errorMsg}: ErrorStateProps) {
  return (
    <div className='error-state'>
      { errorMsg || 'Coś poszło nie tak!' }
    </div>
  );
}

export default ErrorState;
