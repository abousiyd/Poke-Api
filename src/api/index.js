import { DOMAIN_API, DEFAULT_ERROR_MESSAGE } from "../commons/constants";

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(DEFAULT_ERROR_MESSAGE);
  }
  return response.json();
}

const Post = {
  async all(query) {
    try {
      const data = await fetchData(`${DOMAIN_API}/${query}`);
      const { results, count } = data;

      const pokemonData = await Promise.all(
        results.map(async (pokemon) => {
          const pokemonData = await fetchData(pokemon.url);
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
      const data = await fetchData(`${DOMAIN_API}/${pokeName}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  },
};

export default Post;
