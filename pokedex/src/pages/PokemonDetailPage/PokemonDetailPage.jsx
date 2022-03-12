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
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <CardDetailPokemon pokemon={pokemon}/>
    </div>
    // <div>
    //   {pokemon && (
    //     <div>
    //       <h1>Hello PokedexDetailPage</h1>
    //       <img src={pokemon.sprites.front_default} />
    //       <img src={pokemon.sprites.back_default} />
    //       <h1>Tipo: {pokemon.types[0].type.name}</h1>
    //       <h1>Status:</h1>
    //       <p>
    //         <strong>{pokemon.stats[0].stat.name}:</strong>{" "}
    //         {pokemon.stats[0].base_stat}
    //       </p>
    //       <p>
    //         <strong>{pokemon.stats[1].stat.name}:</strong>{" "}
    //         {pokemon.stats[1].base_stat}
    //       </p>
    //       <p>
    //         <strong>{pokemon.stats[2].stat.name}:</strong>{" "}
    //         {pokemon.stats[2].base_stat}
    //       </p>
    //       <p>
    //         <strong>{pokemon.stats[3].stat.name}:</strong>{" "}
    //         {pokemon.stats[3].base_stat}
    //       </p>
    //       <p>
    //         <strong>{pokemon.stats[4].stat.name}:</strong>{" "}
    //         {pokemon.stats[4].base_stat}
    //       </p>
    //       <p>
    //         <strong>{pokemon.stats[5].stat.name}:</strong>{" "}
    //         {pokemon.stats[5].base_stat}
    //       </p>
    //       <h1>Principais Ataques:</h1>
    //       <p>{pokemon.moves[0].move.name}</p>
    //       <p>{pokemon.moves[1].move.name}</p>
    //       <p>{pokemon.moves[2].move.name}</p>
    //       <p>{pokemon.moves[3].move.name}</p>
    //       <p>{pokemon.moves[4].move.name}</p>
    //     </div>
    //   )}
    // </div>
    // <div>
    //   <h1>Hello PokedexDetailPage</h1>
    //   <img src={pokemon.sprites.front_default}/>
    //   <img src={pokemon.sprites.back_default}/>
    //   <h1>Tipo: {pokemon.types[0].type.name}</h1>
    //   <h1>Status:</h1>
    //   <p><strong>{pokemon.stats[0].stat.name}:</strong> {pokemon.stats[0].base_stat}</p>
    //   <p><strong>{pokemon.stats[1].stat.name}:</strong> {pokemon.stats[1].base_stat}</p>
    //   <p><strong>{pokemon.stats[2].stat.name}:</strong> {pokemon.stats[2].base_stat}</p>
    //   <p><strong>{pokemon.stats[3].stat.name}:</strong> {pokemon.stats[3].base_stat}</p>
    //   <p><strong>{pokemon.stats[4].stat.name}:</strong> {pokemon.stats[4].base_stat}</p>
    //   <p><strong>{pokemon.stats[5].stat.name}:</strong> {pokemon.stats[5].base_stat}</p>
    //   <h1>Principais Ataques:</h1>
    //   <p>{pokemon.moves[0].move.name}</p>
    //   <p>{pokemon.moves[1].move.name}</p>
    //   <p>{pokemon.moves[2].move.name}</p>
    //   <p>{pokemon.moves[3].move.name}</p>
    //   <p>{pokemon.moves[4].move.name}</p>
    // </div>
  )
};

export default PokedexDetailPage;
