import React from 'react';
import { render } from '@testing-library/react';
import { MobileNavbar } from './MobileNavbar';

test('renders the MobileNavbar component without errors', () => {
  render(<MobileNavbar/>);
});