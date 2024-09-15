import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ExpenseRow from '@/components/ExpenseRow';

jest.mock('../app/components/ConfirmationModal', () => jest.fn(() => null));

describe('ExpenseRow component', () => {
  const expense = {
    id: 7,
    date: new Date('2024-08-12T00:00:00.000Z'),
    amount: 43.02,
    place: 'Casino',
    currency: '€',
    created_at: new Date('2024-09-14T08:33:01.438Z'),
    categoryName: 'Culture and entertainment',
  };

  beforeEach(() => {
    render(
      <ExpenseRow expense={expense} handleDelete={() => Promise.resolve()} />
    );
  });

  it('Renders expense date in the right format', () => {
    const expenseDate = screen.getByText('2024-08-12');
    expect(expenseDate).toBeInTheDocument();
  });

  it('Renders amount and currency together', () => {
    const price = screen.getByText('43.02 €');
    expect(price).toBeInTheDocument();
  });

  it('Renders place name and category', () => {
    const place = screen.getByText('Casino');
    const category = screen.getByText('Culture and entertainment');
    expect(place).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });

  it('Does not render created_at and id fields', () => {
    const createdAt = screen.queryByText('2024-09-14');
    const id = screen.queryByText(expense.id);
    expect(createdAt).toBeNull();
    expect(id).toBeNull();
  });
});
