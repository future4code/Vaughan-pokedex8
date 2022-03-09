import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../../constants/url"
import { Buttons, CardPokimon } from "./styled"
// import { CardContainer } from "./styled"

const CardPokemon = ({name, url}) =>{
    // console.log(name)
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
            <button>Adicionar a pokedex</button>
            <button>Ver detalhes</button>
            </Buttons>
        </CardPokimon>
    )
}

export default CardPokemon 