import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Home/Home.css";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
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

  // ADD THIS SORTING FUNCTION
  const handleSort = (order) => {
    const sorted = [...pokemonList].sort((a, b) => {
      if (order === 'asc') return a.name.localeCompare(b.name);
      if (order === 'desc') return b.name.localeCompare(a.name);
      return 0; // 'default' case
    });
    setPokemonList(sorted);
  };

  if (loading) {
    return <div className="loading-spinner"><h1>Loading Pokemon Data...</h1></div>;
  }

  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Welcome, Trainer!</h1>
        <p>Explore the Pokédex and discover the mysteries of the wild.</p>
        
        {/* ADD THIS FILTER DROPDOWN */}
        <div className="filter-container" style={{ margin: '20px 0' }}>
          <label htmlFor="sort">Sort Pokémon: </label>
          <select id="sort" onChange={(e) => handleSort(e.target.value)}>
            <option value="default">Default</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
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