import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { CardContainer, CardType, CardPokemon } from "./styled";
import Typography from '@mui/material/Typography';
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

  return <CardContainer>
    <CardPokemon>
      <Typography variant="h4" gutterBottom component="div">{pokemon.name}</Typography>
      <img src={pokemon.photoBack} alt={pokemon.name} />
      <div>
        <Typography variant="h2" gutterBottom component="div">
          Tipo:
        </Typography>
        {pokemon && pokemon?.type?.map((item, index) => {
          return (
            <CardType>
              <Typography key={index} variant="h6" gutterBottom component="div">
                {item.type.name}
              </Typography>
            </CardType>
          )
        })}
        {pokemon && pokemon?.stats?.map((status, index) => {
          return (
            <p key={index}>
              <strong>{status.stat.name}: </strong>
              {status.base_stat}
            </p>
          )
        })}
      </div>
    </CardPokemon>
    {/* <Typography variant="h2" gutterBottom component="div">
        Tipo:
      </Typography>
    

    {pokemon && pokemon?.type?.map((item, index) => {
      return (
        <CardType>
          <Typography key={index} variant="h6" gutterBottom component="div">
            {item.type.name}
          </Typography>
        </CardType>
      )

    })}
    {pokemon && pokemon?.stats?.map((status, index) => {
      return (
        <p key={index}>
          <strong>{status.stat.name}: </strong>
          {status.base_stat}
        </p>

      )
    })} */}
  </CardContainer>;
};

export default PokedexDetailPage;
