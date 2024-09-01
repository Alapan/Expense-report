export interface User {
  email: string;
  nickname?: string;
  name: string;
  picture: string;
}

export enum CategoryType {
  NEED = 'need',
  WANT = 'want',
};

export interface Currency {
  name: string;
  value: string;
}

export interface Category {
  name: string;
  type: CategoryType;
  description?: string;
}

export interface DbExpense {
  id: number;
  date: Date;
  amount: number;
  place: string;
  currency: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  category_id: number;
}

export interface UiExpense extends Omit<DbExpense, 'category_id'> {
  categoryName: string;
}

export interface ExpensesByMonth {
  month: string;
  year: string;
  total?: number;
  expenses: UiExpense[];
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

export const categories: Category[] = [
  {
    name: 'Food and groceries',
    type: CategoryType.NEED,
  },
  {
    name: 'Housing',
    description: 'e.g maintenance fee, extra renovations',
    type: CategoryType.NEED,
  },
  {
    name: 'Loans',
    description: 'Includes house loans and other loans',
    type: CategoryType.NEED,
  },
  {
    name: 'Health',
    description: 'Doctor charges, test fees etc.',
    type: CategoryType.NEED,
  },
  {
    name: 'Vehicles and transport',
    type: CategoryType.NEED,
  },
  {
    name: 'Insurance policies',
    type: CategoryType.NEED,
  },
  {
    name: 'Other needs',
    description: 'e.g. debt collection, taxes',
    type: CategoryType.NEED,
  },
  {
    name: 'Shopping',
    type: CategoryType.WANT,
  },
  {
    name: 'Restaurants and cafés',
    type: CategoryType.WANT,
  },
  {
    name: 'Travel',
    description: 'e.g. holidays',
    type: CategoryType.WANT,
  },
  {
    name: 'Hobbies',
    type: CategoryType.WANT,
  },
  {
    name: 'Culture and entertainment',
    description: 'e.g. movies, visits to museums, parks',
    type: CategoryType.WANT,
  },
  {
    name: 'Other wants',
    description: 'e.g. service charges and fees',
    type: CategoryType.WANT,
  },
];
