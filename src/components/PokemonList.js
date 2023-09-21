import usePokemonList from '../hooks/usePokemonList';

function PokemonList() {
  const {
    loading,
    error,
    pokemons,
    currentPage,
    totalPages,
    nextPage, previousPage
  } = usePokemonList();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  

  return (
    <div className="pokeList">
      <h1 className="pokeList__title">Pokémon List</h1>
      

      <div className='pokemon-list'>
      {pokemons.map((pokemon, index) => (
        <div key={index} className='pokemon-item'>
          <p className='pokemon-name'>{pokemon.name}</p>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className='pokemon-image'
          />
        </div>
      ))}
    </div>

      <div className="pokeList__pagination">
        <button
          className="pokeList__pagination-button"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="pokeList__pagination-currentPage">{currentPage}</span> of{' '}
        <span className="pokeList__pagination-totalPages">{totalPages}</span>
        <button
          className="pokeList__pagination-button"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
