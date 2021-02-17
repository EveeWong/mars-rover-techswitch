import React from 'react';
import { render } from '@testing-library/react';
import { Curiosity } from './curiosity';

test('renders the curiosity component without errors', () => {
  render(<Curiosity />);
});