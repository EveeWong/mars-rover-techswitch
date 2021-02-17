import React from 'react';
import { render } from '@testing-library/react';
import { MobileNavbar } from './MobileNavbar';
import { BrowserRouter } from 'react-router-dom';

test('renders the MobileNavbar component without errors', () => {
  render(
    <BrowserRouter>
      <MobileNavbar/>
    </BrowserRouter>
  );
});