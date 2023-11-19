// import necessary react testing library helpers here
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter'; // Adjust the path as necessary


beforeEach(() => {
  // Render the Counter component here
   render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Counter')).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count').textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count').textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
   // First, increment to avoid negative values (optional)
   fireEvent.click(screen.getByText('+'));
   // Then decrement
   fireEvent.click(screen.getByText('-'));
   expect(screen.getByTestId('count').textContent).toBe('0');
});
