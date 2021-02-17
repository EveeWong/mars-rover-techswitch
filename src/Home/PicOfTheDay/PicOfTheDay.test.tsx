import React from 'react';
import { render } from '@testing-library/react';
import { PicOfTheDay } from './PicOfTheDay';

test('renders the PicOfTheDay component without errors', () => {
  render(<PicOfTheDay />);
});