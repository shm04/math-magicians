import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/quote';

describe('Quote', () => {
  test('render correctly', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });

  test('Show loading message', () => {
    const { getByText } = render(<Quote />);
    const loading = getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });
});
