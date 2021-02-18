import React from 'react';
import { render } from '@testing-library/react';
import { Curiosity } from './curiosity';
import { BrowserRouter } from 'react-router-dom';

test('renders the curiosity component without errors', () => {
  render(
    <BrowserRouter>
      <Curiosity />
    </BrowserRouter>
  );
});