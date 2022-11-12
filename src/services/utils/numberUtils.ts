export const roundTo2Decimals = (num: number): number => (
  Math.round((num + Number.EPSILON) * 100) / 100
);

export const getOffsetFromPage = (page: number, pageSize: number): number => (
  (page - 1) * pageSize
);

export const getPageFromOffset = (offset: number, pageSize: number): number => (
  offset / pageSize + 1
);
