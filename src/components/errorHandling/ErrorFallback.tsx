import { FallbackProps } from 'react-error-boundary';
import { notification } from 'antd';

function ErrorFallback({ error }: FallbackProps) {
  notification.error({
    message: `Error: ${error.message}`,
  });

  return null;
}

export default ErrorFallback;
