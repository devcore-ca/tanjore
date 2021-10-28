import React, { SetStateAction } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Menu from "../components/menu/Menu.component";
import Home from "../components/home/Home.component";
import About from "../components/about/About.component";
import Gallery from "../components/gallery/Gallery.component";
import Contact from "../components/contact/Contact.component";
import { Routes } from "./Routes";
import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";
import Footer from "../components/footer/Footer";
import tanjoreLogo from "../components/home/images/tanjoreCroppedLogo.png";
import Grid from "@mui/material/Grid";

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
        style={{ color: "black" }}
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
      <AppBar
        position="static"
        style={{ backgroundColor: "#FFFFFF", width: "100%" }}
      >
        <Grid>
          <Toolbar style={{ width: "100%" }}>
            <img
              src={tanjoreLogo}
              style={{
                width: "20%",
                paddingRight: "10px",
              }}
              onClick={(event) => {
                event.preventDefault();
                history.push("/home");
              }}
            />

            <Tabs
              TabIndicatorProps={{
                style: { backgroundColor: "transparent" },
              }}
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              style={{ right: "10%", position: "absolute", width: "80%" }}
            >
              <LinkTab label="About Us" to={Routes.About} />
              <LinkTab label="Menu" to={Routes.menu} />
              <LinkTab label="Gallery" to={Routes.gallery} />
              <LinkTab label="Contact" to={Routes.contact} />
            </Tabs>
          </Toolbar>
        </Grid>
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
        <Route path={Routes.home}>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default Router;
