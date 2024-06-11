import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';

test('renders react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
