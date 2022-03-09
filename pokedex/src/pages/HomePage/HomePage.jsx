import axios from "axios";
import { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { BASE_URL } from "../../constants/url";
import { CardContainer, ContainerPokemon, Header } from "./styled";
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
    <Header>
      <ContainerPokemon>
        {listPokemon && listPokemon.map((pokemon) => {
          return (
            
            <CardContainer key={pokemon.url}>
              <CardPokemon
                name={pokemon.name}
                url={pokemon.url}
              />
            </CardContainer>
          )
        })}
      </ContainerPokemon>
    </Header>
  );
}

export default HomePage;