import React from 'react';
import { MobileNavbar } from './MobileNavbar';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from "@testing-library/react";

test('renders the MobileNavbar component without errors', () => {
  render(
    <BrowserRouter>
      <MobileNavbar />
    </BrowserRouter>
  );
});

test('makes the MobileNavbar visible on menu button click', () => {
  // Arrange
  const navbar = render(
    <BrowserRouter>
      <MobileNavbar />
    </BrowserRouter>
  );

  const menu = navbar.container.querySelector("#mobile_nav");  

  // Act - click on the sandwich icon
  fireEvent.click(navbar.container.querySelector("#mobile_nav_toggle"));

  // Assert
  expect(menu.classList).toContain("mobile_nav_visible");
});