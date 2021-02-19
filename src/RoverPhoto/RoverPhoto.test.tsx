import React from 'react';
import { render } from '@testing-library/react';
import { RoverPhoto } from './RoverPhoto';

test('renders the rover photo component without errors', () => {
  render(<RoverPhoto />);
});