import React from 'react';
import { render } from '@testing-library/react';
import { Spirit } from './spirit';
import { BrowserRouter } from 'react-router-dom';

test('renders the spirit component without errors', () => {
  render(
    <BrowserRouter>
      <Spirit />
    </BrowserRouter>);
});