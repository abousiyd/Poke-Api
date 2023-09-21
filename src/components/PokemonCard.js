import { Link } from "react-router-dom";

const PokemonCard = ({ name, image }) => {
  return (
    <Link className="pokemon-card" to={`/${name}`} data-img={image}>
      <img src={image} alt={name} className="pokemon-image" />
      <h2 className="pokemon-name">{name}</h2>
    </Link>
  );
};

export default PokemonCard;
