import { fireEvent, render, screen } from '@testing-library/react';
import CategorisedExcuse from './CategorisedExcuse';

describe('CategorisedExcuse', () => {
  test('keeps button disabled until a valid category is selected', () => {
    render(
      <CategorisedExcuse
        categories={[
          { name: 'Work', excuses: ['Late train', 'Power outage'] },
        ]}
      />,
    );

    const button = screen.getByRole('button', { name: /get excuse/i });
    expect(button).toBeDisabled();

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Work' } });
    expect(button).toBeEnabled();
  });

  test('selects a random excuse from the chosen category', () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.9);

    render(
      <CategorisedExcuse
        categories={[
          { name: 'Work', excuses: ['Late train', 'Power outage', 'Network issue'] },
        ]}
      />,
    );

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Work' } });
    fireEvent.click(screen.getByRole('button', { name: /get excuse/i }));

    expect(screen.getByText('Network issue')).toBeInTheDocument();

    randomSpy.mockRestore();
  });

  test('does not set an excuse when selected category is an empty string', () => {
    render(
      <CategorisedExcuse
        categories={[
          { name: '', excuses: ['Empty category excuse'] },
        ]}
      />,
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '' } });

    const button = screen.getByRole('button', { name: /get excuse/i });
    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(screen.queryByText('Empty category excuse')).not.toBeInTheDocument();
  });
});
