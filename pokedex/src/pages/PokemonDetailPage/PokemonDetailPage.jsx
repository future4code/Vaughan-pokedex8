import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { CardContainer, CardType, CardPokemon, CardPower, CardTitle } from "./styled";
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
          stats: response.data.stats,
          moves: response.data.moves
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return <CardContainer>
    <CardPokemon>
      <Typography variant="h2" gutterBottom component="div">{pokemon.name}</Typography>
      <img src={pokemon.photoBack} alt={pokemon.name} />
      <div>
        <CardTitle variant="h5" gutterBottom component="div">
          Tipo
        </CardTitle>
        {pokemon && pokemon?.type?.map((item) => {
          return (
            <CardType>
              <Typography key={item.url} variant="h6" gutterBottom component="div">
                {item.type.name}
              </Typography>
            </CardType>
          )
        })}
        <CardTitle variant="h6" gutterBottom component="div">
          Poderes
        </CardTitle>
        {pokemon && pokemon?.stats?.map((status) => {
          return (
            <CardType>
              <Typography key={status.url}>
                <strong>{status.stat.name}: </strong>
                {status.base_stat}
              </Typography>
            </CardType>
          )
        })}
        <CardTitle variant="h6" gutterBottom component="div">
          Principais Ataques
        </CardTitle>
        {pokemon && pokemon?.moves?.map((mainMove, index) => {
          let pegando = []
          if (index < 5) {
            pegando.push(mainMove.move.name)
          }
          return (
            pegando.map((item, index) => {
              return (
                <CardType>
                  <CardPower key={index}>
                    <Typography variant="h6" gutterBottom component="div">
                      {item}
                    </Typography>
                  </CardPower>
                </CardType>
              )
            })
          )
        })}
      </div>
    </CardPokemon>
  </CardContainer>;
};

export default PokedexDetailPage;
