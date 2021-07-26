import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import Menu from './components/Menu';
import Home from './components/Home/Home';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/settings">Settings</Link>
      
      <Switch>
        <Route path="/menu">
          <Menu/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
