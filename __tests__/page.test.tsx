import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '../app/page';

describe('Page', () => {
  beforeEach(() => {
    render(<Page />);
  });

  it('renders the main heading', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('renders the sub-heading', () => {
    const subHeading = screen.getByRole('heading', { level: 4 });
    expect(subHeading).toBeInTheDocument();
  });

  it('renders the landing page image', () => {
    const image = screen.getByAltText(
      'Landing page image for living expenses showing pen on paper bill'
    );
    expect(image).toBeInTheDocument();
  });

  it('renders the Login button', () => {
    const loginBtn = screen.getByText('Login');
    expect(loginBtn).toBeInTheDocument();
  });

  it('renders the Sign up button', () => {
    const signUpBtn = screen.getByText('Sign Up');
    expect(signUpBtn).toBeInTheDocument();
  });
});
