import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'; 
import About from './components/About'; 
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Projects from './components/Projects';
import './styles/index.css';
import './styles/BoxStyles.css';
function App() {
  return (
    <Router>
      <div class="nav-box">
        <Nav />
      </div>
      <div class="content-box">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <div class="footer-box"><Footer /></div>
    </Router>
  );
}

export default App;
