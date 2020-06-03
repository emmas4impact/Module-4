import React from 'react';
import logo from './logo.svg';
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
