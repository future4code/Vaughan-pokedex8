import { useContext } from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CardContainer, ContainerPokemon, Header } from "./styled";
import Button from '@mui/material/Button';
const HomePage = () => {
  const { listaPokemon, setListaPokemon, cart, setCart } = useContext(GlobalStateContext)
  const removeFromPokemon = (name) => {
    const listaPokemonNewCart = [...listaPokemon];
    const indexProduct = listaPokemon.findIndex((pokemon) => {
      return pokemon.name === name;
    });
    listaPokemonNewCart.splice(indexProduct, 1);
    setListaPokemon(listaPokemonNewCart);
  };

  const addPokemonInPokedex = (pokemon) => {
    const newCart = [...cart]
    newCart.push({ ...pokemon })
    setCart(newCart)
    removeFromPokemon(pokemon.name)
  }
  return (
    <Header>
      <ContainerPokemon>
        {listaPokemon && listaPokemon.map((pokemon, index) => {
          return (
            <CardContainer key={pokemon.url}>
              <CardPokemon
                name={pokemon.name}
                url={pokemon.url}
                addPokemon={() => addPokemonInPokedex(pokemon, index)}
              />
              <Button color="primary" variant="contained" onClick={() => addPokemonInPokedex(pokemon, index)}>Adicionar a pokedex</Button>
            </CardContainer>
          )
        })}
      </ContainerPokemon>

    </Header>
  );
}

export default HomePage;