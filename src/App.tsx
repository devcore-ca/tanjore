import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import Menu from './components/menu/Menu.component';
import Home from './components/home/Home.component';

function App() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/menu">Menu</Link>
      
      <Switch>
        <Route path="/menu">
          <Menu/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
