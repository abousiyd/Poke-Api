import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import usePokemonList from "../hooks/usePokemonList";

function PokemonList() {
  const {
    loading,
    error,
    pokemons,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
  } = usePokemonList();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>

      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.name} />
        ))}
      </div>

      <Pagination
        previousPage={previousPage}
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
      />
    </>
  );
}

export default PokemonList;
