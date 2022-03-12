import { GlobalStateContext } from "./GlobalStateContext"
import { useState, useEffect } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"

const GlobalState = (props) => {
    const [listaPokemon, setListaPokemon] = useState([])
    const [cart, setCart] = useState([])
    
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

    return (
        <GlobalStateContext.Provider value={{ listaPokemon, setListaPokemon, cart, setCart }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
