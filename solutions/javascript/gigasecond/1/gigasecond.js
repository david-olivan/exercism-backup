const GIGA_SECONDS = 1000000000;

export const gigasecond = (initialDate) => {
  const currentSeconds = initialDate.getSeconds();
  let newDate = new Date(initialDate);
  newDate.setSeconds(currentSeconds + GIGA_SECONDS);
  
  return newDate;
};
