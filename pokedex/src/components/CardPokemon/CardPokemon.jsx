import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { goToPokemonDetail } from "../../Router/coordinator"
import { Buttons, CardPokimon } from "./styled"

// import { CardContainer } from "./styled"

const CardPokemon = ({name, addPokemon}) =>{
    const navigate = useNavigate()
    // console.log(name)
    const {listaPokemon, setListaPokemon, cart, setCart} = useContext(GlobalStateContext)
    const [listaPhoto, setListaPhoto] = useState([])
    
    const getPhoto = (name)=>{
        axios.get(`${BASE_URL}/${name}`)
        .then((response)=>{
            
            setListaPhoto(response.data.sprites.front_default)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    getPhoto(name)

    return (
        <CardPokimon>
            <p>{name}</p>
            <img src={listaPhoto} alt={name} />
            <Buttons>
            <button onClick={addPokemon}>Adicionar a pokedex</button>
            <button onClick={() => goToPokemonDetail(navigate, name)}>Ver detalhes</button>
            </Buttons>
        </CardPokimon>
    )
}

export default CardPokemon 