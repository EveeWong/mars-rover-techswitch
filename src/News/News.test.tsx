import React from 'react';
import { News } from './News';
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";

test('renders the News page without errors', () => {
    render(
      <BrowserRouter>
        <News />
      </BrowserRouter>
    );
  });