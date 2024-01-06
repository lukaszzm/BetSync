export const formatDate = (time: string) => {
  return new Date(time).toLocaleDateString("en-GB");
};
