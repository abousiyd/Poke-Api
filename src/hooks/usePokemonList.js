import { useState, useEffect } from 'react';
import axios from 'axios';
import { usePokemonContext } from '../context/PokemonContext';

const usePokemonList = () => {
    const { currentPage, setCurrentPage, totalPages, setTotalPages, nextPage, previousPage } = usePokemonContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(currentPage - 1) * 10}`
        );
        const results = response.data.results;
        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return {
              name: res.data.name,
              image: res.data.sprites.front_default,
            };
          })
        );
        setPokemons(pokemonData);
        setTotalPages(Math.ceil(response.data.count / 10)); // Assuming 10 Pokémon per page
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  return { loading, error, pokemons, currentPage, totalPages, setCurrentPage, nextPage, previousPage };
};

export default usePokemonList;
