import React from 'react';
import { render } from '@testing-library/react';
import { Opportunity } from './opportunity';

test('renders the opportunity component without errors', () => {
  render(<Opportunity />);
});