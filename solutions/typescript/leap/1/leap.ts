export function isLeap(evaluated_year: number) {
  return evaluated_year % 4 === 0 && evaluated_year % 100 != 0
    ? true
    : evaluated_year % 100 === 0 && evaluated_year % 400 === 0;
}
