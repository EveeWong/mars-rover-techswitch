import React from 'react';
import { RoverSelection } from './RoverSelection';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

test('renders the RoverSelection component without errors', () => {
  render(
    <BrowserRouter>
      <RoverSelection/>
    </BrowserRouter>    
  );
});

test('Onclick Event is working that oppotunity button works', () => {
  const {getByTestId} =render(<BrowserRouter> <RoverSelection/> </BrowserRouter>)
  const opportunitybutton = getByTestId('OpportunityButton')
  const opportunityStats = getByTestId('OpportunityStats')
  expect(opportunitybutton.className).toBe('unselected-icon')
  expect(opportunityStats.className).toBe('un-selectedpic')
  fireEvent.click(opportunitybutton)
  expect(opportunitybutton.className).toBe('selected-icon')
  expect(opportunityStats.className).toBe('selected-pic')
})

test('Curiosity is selected by default and unselected when Spirit is clicked', () => {
  const {getByTestId} =render(<BrowserRouter> <RoverSelection/> </BrowserRouter>)
  const curiosityButton = getByTestId('CuriosityButton')
  const spiritButton = getByTestId('SpiritButton')
  const curiosityStats = getByTestId('CuriosityStats')
  expect(curiosityButton.className).toBe('selected-icon')
  expect(curiosityStats.className).toBe('selected-pic')
  expect(spiritButton.className).toBe('unselected-icon')
  fireEvent.click(spiritButton)
  expect(curiosityStats.className).toBe('un-selectedpic')
  expect(spiritButton.className).toBe('selected-icon')

})