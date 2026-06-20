import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokemonDetails from "../PokemonDetails/PokemonDetail.css"

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log("Pokemon not found"));
  }, [name]);

  if (!pokemon) return (
    <div className="loading-message">
      <p>Searching the tall grass for your Pokémon...</p>
    </div>
  );

  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{width: '200px'}} />
      <div className="stats">
        <p className="pokemon-para">Height: {pokemon.height}</p>
        <p className="pokemon-para">Weight: {pokemon.weight}</p>
        <h3 className="pokemon-para">Abilities</h3>
        <ul>
          {pokemon.abilities.map((a) => <li key={a.ability.name}>{a.ability.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
