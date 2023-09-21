import { useNavigate } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";

const PokemonDetail = () => {
  const navigate = useNavigate()
  const {pokemon, loading, error} = usePokemon();


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!pokemon) return <div>Pokemon not found.</div>;

  const abilities = pokemon.abilities.map((ability) => ability.ability.name).join(', ');
  const types = pokemon.types.map((type) => type.type.name).join(', ');


  return (
    <div class="pokemon-card">
      <span class="pokemon-card__back-button" onClick={() => navigate(-1)}>Back</span>
      <h1 class="pokemon-card__name">{pokemon.name}</h1>
      <img class="pokemon-card__image" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p class="pokemon-card__info">Height: {pokemon.height / 10} meters</p>
      <p class="pokemon-card__info">Weight: {pokemon.weight / 10} kilograms</p>
      <p class="pokemon-card__info">Abilities: {abilities}</p>
      <p class="pokemon-card__info">Types: {types}</p>
    </div>

  );
};

export default PokemonDetail;
