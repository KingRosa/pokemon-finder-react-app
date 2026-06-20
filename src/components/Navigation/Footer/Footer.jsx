import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} PokéDex App. Built for Trainers. By KingRosa19</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">Powered by PokéAPI</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;