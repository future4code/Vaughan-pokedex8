import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CardContainer, ContainerPokemon } from "../HomePage/styled";
import { Buttons } from "./styled";
import axios from "axios";
import CardPokemon from "../../components/CardPokemon/CardPokemon";

const PokedexPage = () => {

  const { listaPokemon, setListaPokemon, cart, setCart } = useContext(GlobalStateContext)
  const [listaPhoto, setListaPhoto] = useState([])

  const getPhoto = (name) => {
    axios.get(`${BASE_URL}/${name}`)
      .then((response) => {
        setListaPhoto(response.data.sprites.front_default)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const removeFromCart = (pokemon) => {
    const newCart = [...cart];
    const indexProduct = cart.findIndex((pk) => {
      return pk.name === pokemon.name;
    });
    newCart.splice(indexProduct, 1);
    setCart(newCart);
    revertPokemon(pokemon)
  };

  const revertPokemon = (pokemon) => {
    const newCart = [...listaPokemon]
    newCart.push({ ...pokemon })
    setListaPokemon(newCart)
  }

  return (
    <ContainerPokemon>
      {cart.length === 0 ? <div>Nao ha pokemons na pokedex</div> : cart && cart.map((pokemon, index) => {
        return (
          <CardContainer key={pokemon.url}>
            <CardPokemon
              name={pokemon.name}
              url={pokemon.url}
            />
            <button onClick={() => removeFromCart(pokemon)}>Retornar a lista</button>
          </CardContainer>
        )
      })}
    </ContainerPokemon>
  );
}

export default PokedexPage;