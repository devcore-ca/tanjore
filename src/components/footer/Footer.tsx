import React from 'react';
import './Footer.css';
import Fab from '@material-ui/core/Fab';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icons: {
      margin: theme.spacing(1),
      left: theme.spacing(1),
    },
    copyrightInfo: {
      textAlign:"right",
    },

    allIcons: {
      paddingLeft: "59%",
    }
  })
)

function Footer() {
  const classes = useStyles()
  return (
    <AppBar position="static" color="primary" style={{ backgroundColor: "#FF8C42", bottom: 0 }}>
      
        <Toolbar>
          <Typography variant="body1" color="inherit">
            Copyright © 2021 Tanjore Indian Cuisine | Website by Devcore Inc.
          </Typography>
          <div className={classes.allIcons}>
        <a href="https://www.facebook.com/TanjoreIndianCuisine/" >
            <Fab size="small" className={classes.icons}>
              <FacebookIcon />
            </Fab>
          </a>
          <a href="https://www.instagram.com/tanjoreindiancuisine/?hl=en">
            <Fab size="small" className={classes.icons}>
              <InstagramIcon />
            </Fab>
          </a>
          </div>
        </Toolbar>
        
      
    </AppBar>
  );
}

export default Footer;