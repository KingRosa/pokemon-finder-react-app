import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Home/Home.css";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true); // 1. Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true); // Start loading
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => fetch(p.url).then((res) => res.json()));
        Promise.all(fetches).then((results) => {
          setPokemonList(results);
          setLoading(false); 
        });
      });
  }, []);

  if (loading) {
    return <div className="loading-spinner"><h1>Loading Pokemon Data...</h1></div>;
  }

  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Welcome, Trainer!</h1>
        <p>Explore the Pokédex and discover the mysteries of the wild.</p>
      </header>

      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name.toUpperCase()}</h3>
            <button onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;