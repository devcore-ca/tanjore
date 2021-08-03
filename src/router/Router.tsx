import React from 'react';
import {
  BrowserRouter, Link, Route, Switch
} from "react-router-dom";
import Menu from '../components/menu/Menu.component';
import Home from '../components/home/Home.component';
import {Routes} from './Routes';
import { AppBar, Tab, Toolbar } from '@material-ui/core';

interface TabLinkProps {
  label: string,
  to: string
}

function Router() {

  function TabLink(props: TabLinkProps) {
    const { label, to } = props;
  
    const renderLink = React.useMemo(
      () => React.forwardRef((itemProps, ref: any) => <Link to={to} ref={ref} {...itemProps} />),
      [to],
    );
  
    return <Tab label={label} component={renderLink} />;
  }
  
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar variant="dense">
          <TabLink label="Home" to={Routes.home} /> 
          <TabLink label="Menu" to={Routes.menu} /> 
        </Toolbar>
      </AppBar>
      
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
