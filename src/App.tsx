import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { HomePage } from './components/home/HomePage.component';
import Menu from './components/menu/menu'

function App() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/menu">Menu</Link>

      <Switch>

        <Route path="/menu">
          <Menu />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
