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
     const {listaPokemon, setListaPokemon} = useContext(GlobalStateContext)
     
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
   console.log(listaPokemon)
  return (
    <Header>
      <ContainerPokemon>
        {listaPokemon && listaPokemon.map((pokemon) => {
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