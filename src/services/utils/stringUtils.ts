export const trimBeforeNewLine = (str: string): string => str.split('\n')[0];

export const getErrorMessage = (error: unknown): string => (
  (error instanceof Error) ? error.message : 'unknown error'
);
