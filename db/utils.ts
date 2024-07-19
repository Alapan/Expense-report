export enum CategoryTypes {
  NEED = 'need',
  WANT = 'want',
};

export interface Currency {
  name: string;
  value: string;
}

export const currencies: Currency[] = [
  {
    name: 'Euro',
    value: '€',
  },
  {
    name: 'Indian Rupee',
    value: '₹'
  },
  {
    name: 'US Dollar',
    value: '$',
  },
  {
    name: 'Pound sterling',
    value: '£',
  },
];
