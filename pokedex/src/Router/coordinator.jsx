export const goToPokedex = (navigate)=>{
    navigate("/pokedex")
}
export const goToPokemonDetail = (navigate, pokeName)=>{
    navigate(`/pokemon/${pokeName}`)
}
export const goToHome = (navigate)=>{
    navigate("/")
}
