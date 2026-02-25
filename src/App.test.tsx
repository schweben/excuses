import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app heading', async () => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      json: async () => ({
        categories: [],
        byoe: { what: [], where: [] },
      }),
    } as Response),
  );

  render(<App />);

  expect(await screen.findByText(/need an excuse/i)).toBeInTheDocument();

  vi.unstubAllGlobals();
});
