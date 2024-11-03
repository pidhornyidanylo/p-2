import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Rectangle from '.';

describe('Rectangle component', () => {
  it('renders properly', () => {
    render(<Rectangle />);
    const container = screen.getByTestId('rectangleContainer');
    const rectanle = screen.getByTestId('rectangleItem');
    expect(container).toBeInTheDocument();
    expect(rectanle).toBeInTheDocument();
  });
});
