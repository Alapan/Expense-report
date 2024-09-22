export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export interface DateFilterState {
  months: {
    [month in (typeof Months)[number]]: boolean;
  };
  years: {
    [year: string]: boolean;
  };
}
