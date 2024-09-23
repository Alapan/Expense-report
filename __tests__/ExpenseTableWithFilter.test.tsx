import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExpensesByMonth } from '@/types';
import ExpenseTableWithFilter from '../app/components/ExpenseTableWithFilter';

jest.mock('../app/components/ConfirmationModal', () => jest.fn(() => null));

describe('ExpenseTableWithFilter', () => {
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
        },
      ],
      total: 144.64,
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
          categoryName: 'Culture and entertainment',
        },
        {
          id: 7,
          date: new Date('2024-08-12T00:00:00.000Z'),
          amount: 43.02,
          place: 'Casino',
          currency: '€',
          created_at: new Date('2024-09-14T08:33:01.438Z'),
          categoryName: 'Culture and entertainment',
        },
      ],
      total: 54.24,
    },
    {
      month: 'December',
      year: '2023',
      expenses: [
        {
          id: 1,
          date: new Date('2024-08-15T00:00:00.000Z'),
          amount: 10.81,
          place: 'Movie',
          currency: '€',
          created_at: new Date('2024-09-19T08:33:46.279Z'),
          categoryName: 'Culture and entertainment',
        },
      ],
      total: 10.81,
    },
  ];

  beforeEach(() => {
    render(<ExpenseTableWithFilter expensesByMonths={expensesByMonths} />);
  });

  it('renders all months by default', () => {
    const septemberHeading = screen.getByRole('heading', {
      level: 2,
      name: 'September 2024',
    });
    const augustHeading = screen.getByRole('heading', {
      level: 2,
      name: 'August 2024',
    });
    const decemberHeading = screen.getByRole('heading', {
      level: 2,
      name: 'December 2023',
    });

    expect(septemberHeading).toBeInTheDocument();
    expect(augustHeading).toBeInTheDocument();
    expect(decemberHeading).toBeInTheDocument();
  });

  it('renders the expenses of only the selected months', async () => {
    await userEvent.click(screen.getByTestId('month-dropdown'));
    await userEvent.click(screen.getByLabelText('September'));
    await userEvent.click(
      screen.getByText('APPLY FILTER', { selector: 'button' })
    );
    const septemberHeading = screen.getByRole('heading', {
      level: 2,
      name: 'September 2024',
    });
    const augustHeading = screen.queryByText('August 2024');
    await expect(septemberHeading).toBeInTheDocument();
    await expect(augustHeading).toBeNull();
  });

  it('renders the expenses of only the selected year', async () => {
    await userEvent.click(screen.getByTestId('year-dropdown'));
    await userEvent.click(screen.getByLabelText('2023'));
    await userEvent.click(
      screen.getByText('APPLY FILTER', { selector: 'button' })
    );
    const septemberHeading = screen.queryByText('September 2024');
    const augustHeading = screen.queryByText('August 2024');
    const decemberHeading = screen.queryByText('December 2023');
    await expect(septemberHeading).toBeNull();
    await expect(augustHeading).toBeNull();
    await expect(decemberHeading).toBeInTheDocument();
  });
});
