import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CardContainer } from "../HomePage/styled";
import { Buttons, CardPokemon } from "./styled";




const PokedexPage = () => {


  const { listaPokemon, setListaPokemon, cart, setCart } = useContext(GlobalStateContext)


  const removeFromCart = (name) => {
    const newCart = [...cart];
    const indexProduct = cart.findIndex((pokemon) => {
      return pokemon.name === name;
    });
    if (newCart[indexProduct].amount > 1) {
      newCart[indexProduct].amount--;
    } else {
      newCart.splice(indexProduct, 1);
    }
    setCart(newCart);
  };

  return (
    <div >
      {cart && cart.map((pokemon, index) => {
        return (
          <CardContainer key={pokemon.url}>
            <CardPokemon>
              <p>{pokemon.name}</p>
              <img src={'listaPhoto'} alt={'name'} />
              <Buttons>
                <button onClick={()=> removeFromCart(pokemon.name)}>Remover da pokedex</button>
                <button onClick={() => console.log('navigatename')}>Ver detalhes</button>
              </Buttons>
            </CardPokemon>
          </CardContainer>
        )
      })}

    </div>
  );
}

export default PokedexPage;