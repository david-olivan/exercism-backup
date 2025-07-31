const GIGA_SECOND = 1000000000;

export const gigasecond = (initialDate) => {
  let newDate = new Date();
  newDate.setTime(initialDate.getTime() + GIGA_SECOND * 1000);
  
  return newDate;
};
