import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SmallScreenRectangleContainer from '.';

jest.mock('gsap', () => {
  const originalGsap = jest.requireActual('gsap');
  return {
    ...originalGsap,
    registerPlugin: jest.fn(),
    from: jest.fn(),
    to: jest.fn(),
    matchMedia: jest.fn(() => ({
      add: jest.fn((query, callback) => {
        const ctx = callback();
        return {
          revert: jest.fn(),
          ...ctx,
        };
      }),
      revert: jest.fn(),
    })),
  };
});

jest.mock('gsap/ScrollTrigger', () => jest.fn());

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

describe('SmallScreenRectangleContainer component', () => {
  it('renders content properly if window width 1200px', () => {
    window.innerWidth = 1200;
    window.dispatchEvent(new Event('resize'));
    render(<SmallScreenRectangleContainer />);
    const mobileRectanglesContainer = screen.getByTestId(
      'mobileRectanglesContainer'
    );
    expect(mobileRectanglesContainer).toBeInTheDocument();
  });
});
