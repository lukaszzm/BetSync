export const toCurrencyString = (value: number) => {
  return (value / 100).toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
};
