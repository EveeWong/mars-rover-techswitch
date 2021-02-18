import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';
import { BrowserRouter } from 'react-router-dom';

test('renders the Home component without errors', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});