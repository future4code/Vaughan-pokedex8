import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetailPokemon from "../../components/CardDetailPokemon/CardDetailPokemon";
import { BASE_URL } from "../../constants/url";

const PokedexDetailPage = () => {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();
  useEffect(() => {
    getPokemon(params);
  }, []);

  const getPokemon = (params) => {
    axios
      .get(`${BASE_URL}/${params.pokeName}`)
      .then((response) => {
        setPokemon({
          name: response.data.species.name,
          photoFront: response.data.sprites.front_default,
          photoBack: response.data.sprites.other.home.front_default,
          type: response.data.types,
          stats: response.data.stats

        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return <div>
    {/* <CardDetailPokemon pokemon={pokemon} /> */}
    <img src={pokemon.photoFront} alt={pokemon.name} />
    <img src={pokemon.photoBack} alt={pokemon.name} />
    <p>
      {pokemon.name}
    </p>
    {pokemon && pokemon?.type?.map((item, index) => {
      return <p key={index}>
        {item.type.name}
      </p>;
    })}
    {pokemon && pokemon?.stats?.map((status, index) => {
      return (
        <p key={index}>
          <strong>{status.stat.name}: </strong>
          {status.base_stat}
        </p>

      )
    })}
  </div>;
};

export default PokedexDetailPage;
