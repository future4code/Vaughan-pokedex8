import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CardContainer, ContainerPokemon } from "../HomePage/styled";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Button from '@mui/material/Button';
const PokedexPage = () => {
  const { listaPokemon, setListaPokemon, cart, setCart } = useContext(GlobalStateContext)
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
            <Button color="primary" variant="contained" onClick={() => removeFromCart(pokemon)}>Retornar a lista</Button>
          </CardContainer>
        )
      })}
    </ContainerPokemon>
  );
}

export default PokedexPage;