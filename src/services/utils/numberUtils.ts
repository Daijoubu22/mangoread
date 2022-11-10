// eslint-disable-next-line import/prefer-default-export
export const roundTo2Decimals = (num: number): number => (
  Math.round((num + Number.EPSILON) * 100) / 100);
