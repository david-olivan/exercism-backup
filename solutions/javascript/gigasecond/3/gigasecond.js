const GIGA_SECOND = 1e9;

export const gigasecond = initialDate => new Date(initialDate.getTime() + GIGA_SECOND * 1000);
