import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

test('renders the Home component without errors', () => {
  render(<Home />);
});