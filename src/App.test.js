import { renderHook } from '@testing-library/react-hooks';
import { usePokemonContext } from './context/PokemonContext';
import usePokemonList from './hooks/usePokemonList';
import Poke from './api';

jest.mock('./context/PokemonContext');
jest.mock('./api');

describe('usePokemonList Hook', () => {
  beforeEach(() => {
    usePokemonContext.mockReturnValue({
      setCurrentPage: jest.fn(),
      setTotalPages: jest.fn(),
      previousPage: jest.fn(),
      currentPage: 1,
      totalPages: 5,
      nextPage: jest.fn(),
    });

    Poke.all.mockResolvedValue({
      pokemonData: [{ name: 'Pikachu' }],
      count: 10,
    });
  });

  it('should fetch data and set state correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePokemonList());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);

    expect(result.current.pokemons).toEqual([{ name: 'Pikachu' }]);
    expect(result.current.totalPages).toBe(5);

    expect(usePokemonContext().setTotalPages).toHaveBeenCalledWith(1);
  });

  it('should handle errors correctly', async () => {
    const errorMessage = 'An error occurred';

    Poke.all.mockRejectedValueOnce(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => usePokemonList());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);

    expect(result.current.error).toEqual(new Error(errorMessage));
  });
});
