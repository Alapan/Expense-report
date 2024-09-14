import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Toast from '@/components/Toast';

describe('Toast component', () => {
  it('Renders message when it is visible', () => {
    render(<Toast
      message='Toast message'
      backgroundColor='bg-green-400'
      width='w-8/12 md:w-4/12'
      isVisible={true}
    />);
    const toast = screen.getByText('Toast message');
    expect(toast).toBeInTheDocument();
  });

  it('Does not render message when visibility is set to false', () => {
    render(<Toast
      message='Another toast message'
      backgroundColor='bg-green-400'
      width='w-8/12 md:w-4/12'
      isVisible={false}
    />);
    const toast = screen.queryByText('Another toast message');
    expect(toast).toBeNull();
  });
});
