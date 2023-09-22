import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import usePokemonList from "../hooks/usePokemonList";
import "../styles/modules/_pokemonList.scss"

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
      <Pagination
        previousPage={previousPage}
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
      />

      <div className="list">
        {pokemons.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.name} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
