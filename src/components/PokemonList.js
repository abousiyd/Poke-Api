import { Link } from 'react-router-dom';
import usePokemonList from '../hooks/usePokemonList';


const PokemonCard = ({ name, image }) => {
  return (
    <Link className="pokemon-card" to={`/${name}`}>
      <img src={image} alt={name} className="pokemon-image" />
      <h2 className="pokemon-name">{name}</h2>
    </Link>
  );
};

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
    <>

    <h1 className="pokemon-title">Pokemons</h1>

    <div className='pokemon-list'>
      {pokemons.map((pokemon) => (
        <PokemonCard {...pokemon} key={pokemon.name}/>
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
    </>
  );
}

export default PokemonList;
