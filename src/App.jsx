import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Project";

const App = () => {
  return (
    <div className="text-white">
      <Link to="/">Home</Link>
      <Link to="/agence">Agence</Link>
      <Link to="/projects">Projects</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
