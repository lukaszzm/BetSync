export const toCurrencyString = (value: number): string => {
  return (value / 100).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
};
