import { fireEvent, render, screen } from '@testing-library/react';
import BuildYourOwnExcuse from './BuildYourOwnExcuse';

describe('BuildYourOwnExcuse', () => {
  test('keeps button disabled until both selects are valid', () => {
    render(
      <BuildYourOwnExcuse
        whatOptions={['Dog', 'Car']}
        whereOptions={['Vet', 'Garage']}
      />,
    );

    const button = screen.getByRole('button', { name: /get excuse/i });
    expect(button).toBeDisabled();

    const selects = screen.getAllByRole('combobox');
    fireEvent.change(selects[0], { target: { value: 'Dog' } });
    expect(button).toBeDisabled();

    fireEvent.change(selects[1], { target: { value: 'Vet' } });
    expect(button).toBeEnabled();
  });

  test('builds a manual excuse from selected values', () => {
    render(
      <BuildYourOwnExcuse
        whatOptions={['Dog', 'Car']}
        whereOptions={['Vet', 'Garage']}
      />,
    );

    const selects = screen.getAllByRole('combobox');
    fireEvent.change(selects[0], { target: { value: 'Dog' } });
    fireEvent.change(selects[1], { target: { value: 'Vet' } });

    fireEvent.click(screen.getByRole('button', { name: /get excuse/i }));

    expect(screen.getByText('I have to take my dog to the vet')).toBeInTheDocument();
  });

  test('enables random mode and builds a random excuse', () => {
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.9);

    render(
      <BuildYourOwnExcuse
        whatOptions={['Dog', 'Car', 'Bike']}
        whereOptions={['Vet', 'Garage', 'Shop']}
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const button = screen.getByRole('button', { name: /get excuse/i });
    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(screen.getByText('I have to take my car to the garage')).toBeInTheDocument();

    randomSpy.mockRestore();
  });
});
