
import { useEffect, useState } from 'react';
import { useParams,  useNavigate } from "react-router-dom";
import axios from 'axios';

const PokemonDetail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const { pokeId } = useParams();
  const navigate = useNavigate()



  useEffect(() => {
    const fetchPokemonDetail = async () => {
      
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        const data = response.data;
        
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
        });
        
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  return (
    <div>
        <span onClick={() => navigate(-1)}>Back</span>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />

    </div>
  );
};

export default PokemonDetail;
