import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import { useScreenOrientation } from './utils/useScreenOrientation';

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";

const App = () => {
  const orientation = useScreenOrientation();

  useEffect(() => {
    if (orientation.includes('landscape')) {
      // Обработка горизонтальной ориентации
      console.log('Landscape orientation');
    } else {
      // Обработка портретной ориентации
      console.log('Portrait orientation');
    }
  }, [orientation]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
       <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
