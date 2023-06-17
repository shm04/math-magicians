import { render } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  it('Render calculator', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
