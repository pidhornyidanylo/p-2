import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import LogoName from '.';

jest.mock('gsap', () => {
  const originalGsap = jest.requireActual('gsap');
  return {
    ...originalGsap,
    context: jest.fn((callback) => {
      callback();
      return { revert: jest.fn() };
    }),
    from: jest.fn((target) => {
      return target;
    }),
    registerPlugin: jest.fn(),
  };
});

describe('LogoName component', () => {
  it('renders properly', () => {
    render(<LogoName />);
    const heading = screen.getByRole('heading', {
      name: /danylo pidhornyi/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
