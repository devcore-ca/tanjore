/** @format */

import Fab from "@material-ui/core/Fab";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icons: {
      margin: theme.spacing(1),
      left: theme.spacing(1),
    },
    toolbar: {
      background: "#FF8C42",
      justifyContent: "space-between",
    },
  })
);

function Footer() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <div>
        <Typography variant="body1" color="inherit">
          Copyright © 2024 Tanjore Indian Cuisine | Website by{" "}
          <a href="https://janac.me/">Janac.me</a>
        </Typography>
      </div>
      <div>
        <a href="https://www.facebook.com/TanjoreIndianCuisine/">
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
  );
}

export default Footer;
