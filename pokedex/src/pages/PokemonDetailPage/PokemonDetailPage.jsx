import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";

const PokedexDetailPage = () => {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    getPokemon(params);
  }, []);

  const getPokemon = (params) => {
    axios
      .get(`${BASE_URL}/${params.pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <h1>Hello PokedexDetailPage</h1>
    </div>
  );
};

export default PokedexDetailPage;
