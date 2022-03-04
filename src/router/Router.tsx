/** @format */

import React, { SetStateAction } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import MenuComponent from "../components/menu/Menu.component";
import Home from "../components/home/Home.component";
import About from "../components/about/About.component";
import SwiperGallery from "../components/gallery/SwiperGallery.component";
import Contact from "../components/contact/Contact.component";
import { Routes } from "./Routes";
import { AppBar, makeStyles, Tab, Tabs, Toolbar } from "@material-ui/core";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import Footer from "../components/footer/Footer.component";
import tanjoreLogo from "../components/home/images/tanjoreCroppedLogo.png";
import Grid from "@mui/material/Grid";
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
        className={styles.nav}
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

  const pages = [
    { title: "HOME", route: Routes.home },
    { title: "ABOUT US", route: Routes.About },
    { title: "MENU", route: Routes.menu },
    { title: "GALLERY", route: Routes.gallery },
    { title: "CONTACT", route: Routes.contact },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="logo for dropdown"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={(event) => {
                      event.preventDefault();
                      history.push(page.route);
                      setAnchorElNav(null);
                    }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Tabs
                TabIndicatorProps={{
                  style: { backgroundColor: "transparent" },
                }}
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                style={{ right: "15%", width: "80%" }}
              >
                <IconButton
                  onClick={(event) => {
                    event.preventDefault();
                    history.push(Routes.home);
                  }}
                >
                  <Avatar
                    alt="Tanjore Logo"
                    src={tanjoreLogo}
                    style={{ marginLeft: "70px", marginRight: "70px" }}
                    sx={{ width: 60, height: 60 }}
                  />
                </IconButton>
                {/* slicing to omit first item (home) */}
                {pages.slice(1).map((page) => (
                  <Button
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <LinkTab label={page.title} to={page.route} />
                  </Button>
                ))}
              </Tabs>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div style={{ minHeight: "90vh" }}>
        <Switch>
          <Route path={Routes.menu}>
            <MenuComponent />
          </Route>
          <Route path={Routes.About}>
            <About />
          </Route>
          <Route path={Routes.gallery}>
            <SwiperGallery />
          </Route>
          <Route path={Routes.contact}>
            <Contact />
          </Route>
          <Route path={Routes.home}>
            <Home />
          </Route>
        </Switch>
      </div>

      <Footer />
    </>
  );
}

export default Router;
