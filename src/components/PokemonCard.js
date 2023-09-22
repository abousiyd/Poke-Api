import { Link } from "react-router-dom";
import "../styles/modules/_pokemonCard.scss"

const PokemonCard = ({ name, image }) => {
  return (
    <Link className="card" to={`/${name}`} >
      <img src={image} alt={name} className="card-image" />
      <span className="card-name">{name}</span>
    </Link>
  );
};

export default PokemonCard;
