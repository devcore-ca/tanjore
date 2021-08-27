import React from 'react';
import './Footer.css';
import Fab from '@material-ui/core/Fab';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(0),
    },
  })
)

function Footer() {
  const classes = useStyles()
  return (
    <footer>

     
      <div id="Footer">

      <div id="Copyright">
          Copyright © 2021 Tanjore Indian Restaurant
        </div>
        <div id="Social">
          <a href="https://www.facebook.com/TanjoreIndianCuisine/" >
            <Fab size="small" className={classes.margin}>
              <FacebookIcon />
            </Fab>
          </a>
          <a href="https://www.instagram.com/tanjoreindiancuisine/?hl=en">
            <Fab size="small" className={classes.margin}>
              <InstagramIcon />
            </Fab>
          </a>
        </div>
        
      </div>
  </footer>
  );
}

export default Footer;