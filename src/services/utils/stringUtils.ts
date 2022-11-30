export const trimMangaDescription = (str: string): string => (
  str.split(/(---|___)/)[0]
);

export const getErrorMessage = (error: unknown): string => (
  (error instanceof Error) ? error.message : 'unknown error'
);
