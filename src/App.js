import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Feedback from "./pages/Feedback/Feedback.jsx";
import PokemonDetail from "./PokemonDetails/PokemonDetail.jsx";
import Nav from "./components/Navigation/Nav.jsx";
import Footer from "./components/Navigation/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Nav />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
