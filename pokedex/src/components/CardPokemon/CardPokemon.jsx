import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../../constants/url"
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
        <div>
            <p>{name}</p>
            <img src={listaPhoto} alt={name} />
            <button>Adicionar a pokedex</button>
            <button>Ver detalhes</button>
        </div>
    )
}

export default CardPokemon 