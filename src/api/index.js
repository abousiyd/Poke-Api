import { DOMAIN_API, DEFAULT_ERROR_MESSAGE } from "../commons/constants";

const Post = {
  async all(query) {
    try {
      const response = await fetch(`${DOMAIN_API}/${query}`);

      if (!response.ok) throw new Error(DEFAULT_ERROR_MESSAGE);

      const data = await response.json();
      const results = data.results;
      const count = data.count;

      const pokemonData = await Promise.all(
        results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);

          if (!res.ok) throw new Error(DEFAULT_ERROR_MESSAGE);

          const pokemonData = await res.json();
          return {
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
          };
        })
      );

      return { pokemonData, count };
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async find(pokeName) {
    try {
      const response = await fetch(`${DOMAIN_API}/${pokeName}`);
      if (!response.ok) throw new Error(DEFAULT_ERROR_MESSAGE);

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  },
};

export default Post;
