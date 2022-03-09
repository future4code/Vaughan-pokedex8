import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokedexDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokemon/:pokeName" element={<PokedexDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
