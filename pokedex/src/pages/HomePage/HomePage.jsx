import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
// import useRequestData from "../../hooks/useRequestData";

const HomePage = () => {
  const [listPokemon, setListPokemon] = useState([])
  useEffect(() => {
    getPokemon()
  }, [])
  const getPokemon = () => {
    axios.get(`${BASE_URL}`)
      .then((response) => {
        // console.log(response.data.results)
        setListPokemon(response.data.results)
        
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <div >
      {listPokemon && listPokemon.map((pokemon) => {
        return (
          <div key={pokemon.url}>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites} alt={pokemon.name} />
          </div>
        )

      })}

    </div>
  );
}

export default HomePage;