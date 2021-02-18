import React from 'react';
import { render } from '@testing-library/react';
import { RoverSelection } from './RoverSelection';
import { BrowserRouter } from 'react-router-dom';

test('renders the RoverSelection component without errors', () => {
  render(
    <BrowserRouter>
      <RoverSelection/>
    </BrowserRouter>    
  );
});