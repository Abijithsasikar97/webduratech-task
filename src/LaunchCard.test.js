import { render, screen } from '@testing-library/react';
import LaunchCard from './components/lauch-card';


test('launch card test', () => {
    render(<LaunchCard />);
    const linkElement = screen.getByText(/launches/i);
    expect(linkElement).toBeInTheDocument();
  });