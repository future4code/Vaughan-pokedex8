import { GlobalStateContext } from "./GlobalStateContext"
import { useState } from "react"
const GlobalState = (props)=>{
    const [listaPokemon, setListaPokemon] = useState([])
    const [cart, setCart] = useState([])
    return(
        <GlobalStateContext.Provider value={{listaPokemon, setListaPokemon, cart, setCart}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
