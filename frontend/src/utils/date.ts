export const formatDate = (rawDate: string): string => {
  const date = new Date(rawDate);
  const year = date.getFullYear().toString().slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
};
