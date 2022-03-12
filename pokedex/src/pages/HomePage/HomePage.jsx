import axios from "axios";
import { useContext } from "react";
import { useEffect} from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { BASE_URL } from "../../constants/url";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CardContainer, ContainerPokemon, Header } from "./styled";
// import useRequestData from "../../hooks/useRequestData";

const HomePage = () => {
  // const [listPokemon, setListPokemon] = useState([])
     const {listaPokemon, setListaPokemon, cart, setCart} = useContext(GlobalStateContext)
     

  const removeFromPokemon = (name) => {
    const listaPokemonNewCart = [...listaPokemon];
    const indexProduct = listaPokemon.findIndex((pokemon) => {
      return pokemon.name === name;
    });
    listaPokemonNewCart.splice(indexProduct, 1);
    setListaPokemon(listaPokemonNewCart);
  };

  const addPokemonInPokedex = (pokemon)=>{
    const newCart = [...cart]
    newCart.push({...pokemon})
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
              <button onClick={() => addPokemonInPokedex(pokemon, index)}>Adicionar a pokedex</button>
            </CardContainer>
          )
        })}
      </ContainerPokemon>
      <button onClick={() => console.log(listaPokemon) } >clicar</button>
    </Header>
  );
}

export default HomePage;