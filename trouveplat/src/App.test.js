import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sidebar menu', () => {
  render(<App />);
  const menuElement = screen.getByText(/Listes Des Clients/i);
  expect(menuElement).toBeInTheDocument();
});
