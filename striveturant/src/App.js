import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import Menu from "./components/Menu";
import NavBar from "./components/Navbar";
import DishDetail from './components/DishDetail';
import Reservation from './components/Reservation'


function App() {
  return (
    
    <>
      <Router>
      <NavBar title="Strivesturant" />
      <Route path="/" exact component={Home} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/reservation" exact component={Reservation} />
      <Route path="/details/:id" component={DishDetail} />
      </Router>
    
    </>
  );
}

export default App;
