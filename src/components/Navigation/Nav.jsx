import React from 'react'
import "../Navigation/Nav.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Logo from "../../assets/pikachu.png"
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm) {
      navigate(`/pokemon/${searchTerm.toLowerCase()}`); 
      setSearchTerm("");
    }
  };

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.body.classList.add('light-mode');
    }
  }, []);


const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div className="home-container">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name} className="pokemon-card">
          <h3>{pokemon.name}</h3>
          {/* You could add a button here to navigate to /pokemon/${pokemon.name} */}
        </div>
      ))}
    </div>
  );
};

const fetchPokemonList = async () => {
  try {
    // We add ?limit=20 to get the first 20 Pokémon
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const data = await response.json();
    
    // 'data.results' contains an array of { name, url }
    console.log(data.results); 
  } catch (error) {
    console.error("Failed to fetch list:", error);
  }
};



  return (
    
    
    <nav>
      <div className="nav-actions">
      <input type="text" placeholder="Search Pokémon" value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleSearch}
      />
    </div>
 <div className="logo">
      <figure>
  <Link to="/"><img src={Logo} alt="" style={{ width: '50px' }}/></Link>
    </figure>
    </div>
   
    {/* NAV LINKS */}
   <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
     

    
<div className="nav-actions">
    <button onClick={toggleTheme}>
          {darkMode ? '☀️' : '🌙'}
        </button>
</div>

    </nav>
    
);
};

export default Nav
