import { useNavigate } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import "../styles/modules/_pokemonDetail.scss"

const PokemonDetail = () => {
  const navigate = useNavigate()
  const {pokemon, loading, error} = usePokemon();


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!pokemon) return <div>Pokemon not found.</div>;

  const abilities = pokemon.abilities.map((ability) => ability.ability.name).join(', ');
  const types = pokemon.types.map((type) => type.type.name).join(', ');


  return (
    <>
      <span onClick={() => navigate(-1)}>Back</span>
      <div class="pokemonDetail">
        <h1>{pokemon.name}</h1>
        <img  src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height / 10} meters</p>
        <p>Weight: {pokemon.weight / 10} kilograms</p>
        <p>Abilities: {abilities}</p>
        <p>Types: {types}</p>
      </div>
    </>

  );
};

export default PokemonDetail;
