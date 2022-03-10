import { GlobalStateContext } from "./GlobalStateContext"
import { useState } from "react"
export const GlobalState = (props)=>{
    const [listaPokemon, setListaPokemon] = useState([])
    return(
        <GlobalStateContext.Provider value={{listaPokemon, setListaPokemon}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
