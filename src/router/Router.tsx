import React from 'react';
import {
  BrowserRouter, Link, Route, Switch
} from "react-router-dom";
import Menu from '../components/menu/Menu.component';
import Home from '../components/home/Home.component';
import {Routes} from './Routes';

function Router() {
  return (
    <BrowserRouter>
      <Link to={Routes.home}>Home</Link>
      <Link to={Routes.menu}>Menu</Link>
      
      <Switch>
        <Route path={Routes.menu}>
          <Menu/>
        </Route>
        <Route path={Routes.home}>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
