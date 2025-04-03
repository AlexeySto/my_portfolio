import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";

const App = () => {

  return (
    <Router>
       <Navbar />
      <div className="App">
        <Routes>
          <Route path="/my_portfolio/" element={<Home />} />
          <Route path="/my_portfolio/about" element={<About />} />
          <Route path="/my_portfolio/projects" element={<Projects />} />
          <Route path="/my_portfolio/project/:id" element={<Project />} />
          <Route path="/my_portfolio/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
