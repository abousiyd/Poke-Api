import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Poke from "../api";

const usePokemon = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const { pokeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await Poke.find(pokeId);
        setPokemon(pokemonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pokeId]);

  return {
    pokemon,
    loading,
    error,
  };
};

export default usePokemon;
