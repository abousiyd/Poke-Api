import { useNavigate } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";

const PokemonDetail = () => {
  const navigate = useNavigate()
  const {pokemon, loading, error} = usePokemon();

  console.log(pokemon, 888)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!pokemon) return <div>Pokemon not found.</div>;

  return (
    <div>
      <span onClick={() => navigate(-1)}>Back</span>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default PokemonDetail;
