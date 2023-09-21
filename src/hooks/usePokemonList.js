import { useState, useEffect } from "react";
import { usePokemonContext } from "../context/PokemonContext";
import Poke from "../api";

const usePokemonList = () => {
  const {
    setCurrentPage,
    setTotalPages,
    previousPage,
    currentPage,
    totalPages,
    nextPage
  } = usePokemonContext();
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `?limit=10&offset=${(currentPage - 1) * 10}`;
        const { pokemonData, count } = await Poke.all(query);
        setPokemons(pokemonData);
        setTotalPages(Math.ceil(count / 10));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  return {
    setCurrentPage,
    previousPage,
    currentPage,
    totalPages,
    pokemons,
    nextPage,
    loading,
    error
  };
};

export default usePokemonList;
