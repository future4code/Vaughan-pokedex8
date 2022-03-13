import React from "react";

const CardDetailPokemon = ({ pokemon }) => {

  return (
    <div>

      {pokemon ? pokemon.sprites.front_default : "nao"}

      {/* <img src={pokemon.sprites.front_default} alt={pokemon.stats[0].stat.name} /> */}
      {/* <h1>Hello PokedexDetailPage</h1>
      <img src={pokemon.sprites.front_default} />
      <img src={pokemon.sprites.back_default} />
      <h1>Tipo: {pokemon.types[0].type.name}</h1>
      <h1>Status:</h1>
      <p>
        <strong>{pokemon.stats[0].stat.name}:</strong>{" "}
        {pokemon.stats[0].base_stat}
      </p>
      <p>
        <strong>{pokemon.stats[1].stat.name}:</strong>{" "}
        {pokemon.stats[1].base_stat}
      </p>
      <p>
        <strong>{pokemon.stats[2].stat.name}:</strong>{" "}
        {pokemon.stats[2].base_stat}
      </p>
      <p>
        <strong>{pokemon.stats[3].stat.name}:</strong>{" "}
        {pokemon.stats[3].base_stat}
      </p>
      <p>
        <strong>{pokemon.stats[4].stat.name}:</strong>{" "}
        {pokemon.stats[4].base_stat}
      </p>
      <p>
        <strong>{pokemon.stats[5].stat.name}:</strong>{" "}
        {pokemon.stats[5].base_stat}
      </p>
      <h1>Principais Ataques:</h1>
      <p>{pokemon.moves[0].move.name}</p>
      <p>{pokemon.moves[1].move.name}</p>
      <p>{pokemon.moves[2].move.name}</p>
      <p>{pokemon.moves[3].move.name}</p>
      <p>{pokemon.moves[4].move.name}</p>
     */}
    </div>
  );
};

export default CardDetailPokemon;