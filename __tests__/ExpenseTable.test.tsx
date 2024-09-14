import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ExpenseTable from '@/components/ExpenseTable';
import { ExpensesByMonth } from '@/types';

jest.mock('../app/components/ExpenseRow', () => jest.fn(() => null));

describe('ExpenseTable component', () => {
  const expensesByMonths: ExpensesByMonth[] = [
    {
      month: 'September',
      year: '2024',
      expenses: [
        {
          id: 3,
          date: new Date('2024-09-13T00:00:00.000Z'),
          amount: 67.81,
          place: 'R-Kioski',
          currency: '€',
          created_at: new Date('2024-09-13T18:23:43.192Z'),
          categoryName: 'Vehicles and transport',
        },
        {
          id: 2,
          date: new Date('2024-09-13T00:00:00.000Z'),
          amount: 21.23,
          place: 'Supermarket',
          currency: '€',
          created_at: new Date('2024-09-13T18:22:52.061Z'),
          categoryName: 'Food and groceries',
        },
        {
          id: 1,
          date: new Date('2024-09-13T00:00:00.000Z'),
          amount: 21.28,
          place: 'Mocktaurant',
          currency: '€',
          created_at: new Date('2024-09-13T17:22:19.752Z'),
          categoryName: 'Food and groceries',
        }
      ],
      total: 144.64
    },
    {
      month: 'August',
      year: '2024',
      expenses: [
        {
          id: 8,
          date: new Date('2024-08-13T00:00:00.000Z'),
          amount: 11.22,
          place: 'Movie',
          currency: '€',
          created_at: new Date('2024-09-14T08:33:46.279Z'),
          categoryName: 'Culture and entertainment'
        },
        {
          id: 7,
          date: new Date('2024-08-12T00:00:00.000Z'),
          amount: 43.02,
          place: 'Casino',
          currency: '€',
          created_at: new Date('2024-09-14T08:33:01.438Z'),
          categoryName: 'Culture and entertainment'
        }
      ],
      total: 54.24
    }
  ];

  beforeEach(() => {
    render(<ExpenseTable expensesByMonths={expensesByMonths}/>);
  });

  it('Renders the month names', () => {
    const septemberHeading = screen.getByRole('heading', { level: 2, name: 'September 2024' });
    const augustHeading = screen.getByRole('heading', { level: 2, name: 'August 2024' });
    expect(septemberHeading).toBeInTheDocument();
    expect(augustHeading).toBeInTheDocument();
  });

  it('Renders the word "Total" twice', () => {
    const totalHeading = screen.getAllByText('Total');
    expect(totalHeading).toHaveLength(2);
  });

  it('Renders the total expense for the month in the right format', () => {
    const septemberTotal = screen.getByText('144.64 €');
    const augustTotal = screen.getByText('54.24 €');
    expect(septemberTotal).toBeInTheDocument();
    expect(augustTotal).toBeInTheDocument();
  });
});
