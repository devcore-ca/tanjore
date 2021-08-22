import React, { SetStateAction } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Menu from "../components/menu/Menu.component";
import Home from "../components/home/Home.component";
import About from "../components/about/About.component";
import Gallery from "../components/gallery/Gallery.component";
import Contact from "../components/contact/Contact.component";
import { Routes } from "./Routes";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import styles from "./Router.module.css";

interface LinkTabProps {
  label: string;
  to: string;
}

function Router() {
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  function LinkTab(props: LinkTabProps) {
    return (
      <Tab
        onClick={(event) => {
          event.preventDefault();
          history.push(props.to);
        }}
        {...props}
      />
    );
  }

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#FF8C42" }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <div id="my-panel">
            <LinkTab label="Home" to={Routes.home} />
          </div>
          <LinkTab label="About Us" to={Routes.About} />
          <LinkTab label="Menu" to={Routes.menu} />
          <LinkTab label="Gallery" to={Routes.gallery} />
          <LinkTab label="Contact" to={Routes.contact} />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path={Routes.menu}>
          <Menu />
        </Route>
        <Route path={Routes.About}>
          <About />
        </Route>
        <Route path={Routes.gallery}>
          <Gallery />
        </Route>
        <Route path={Routes.contact}>
          <Contact />
        </Route>
        <Route path={Routes.contact}>
          <Contact />
        </Route>
        <Route path={Routes.home}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
