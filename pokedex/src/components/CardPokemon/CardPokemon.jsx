import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { goToPokemonDetail } from "../../Router/coordinator"
import { Buttons, CardPokimon, Img } from "./styled"
import Button from '@mui/material/Button';
const CardPokemon = ({ name, addPokemon }) => {
    const navigate = useNavigate()
    const [listaPhoto, setListaPhoto] = useState([])
    const getPhoto = (name) => {
        axios.get(`${BASE_URL}/${name}`)
            .then((response) => {

                setListaPhoto(response.data.sprites.other.dream_world.front_default)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    getPhoto(name)
    return (
        <CardPokimon>
            <p>{name}</p>
            <Img src={listaPhoto} alt={name} />
            <Buttons>
                <Button onClick={() => goToPokemonDetail(navigate, name)}>Ver detalhes</Button>
            </Buttons>
        </CardPokimon>
    )
}

export default CardPokemon 