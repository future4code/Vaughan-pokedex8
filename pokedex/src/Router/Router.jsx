import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import PokedexDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokemon/:pokeName" element={<PokedexDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;