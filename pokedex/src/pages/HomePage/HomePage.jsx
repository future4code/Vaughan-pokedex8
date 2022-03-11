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
     
  useEffect(() => {
    getPokemon()
  }, [])
  const getPokemon = () => {
    axios.get(`${BASE_URL}`)
      .then((response) => {
        setListaPokemon(response.data.results)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
  const addPokemonInPokedex = (pokemon, index)=>{
    const newCart = [...cart]
    const indexPokemon = newCart.findIndex((pokemonCart)=>{
      return index === pokemonCart
    })
    if(indexPokemon === -1){
      newCart.push({...pokemon, amount: 1})
      
    }
    setCart(newCart)
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
            </CardContainer>
          )
        })}
      </ContainerPokemon>
      <button onClick={() => console.log(cart) } >clicar</button>
    </Header>
  );
}

export default HomePage;