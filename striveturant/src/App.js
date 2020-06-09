import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import NavBar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <NavBar title="Strivesturant" />
      <Home />
    
    </div>
  );
}

export default App;
