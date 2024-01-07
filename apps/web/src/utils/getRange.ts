export const getRange = (currentPage: number, lastPage: number): number[] => {
  let range: number[] = [];

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 0 && i <= lastPage) {
      range.push(i);
    }
  }

  if (!range.includes(1)) {
    range = [1, ...range];
  }

  if (!range.includes(lastPage)) {
    range = [...range, lastPage];
  }

  return range;
};
