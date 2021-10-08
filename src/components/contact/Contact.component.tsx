import React from "react";
import { Grid, Container } from "@material-ui/core";
import contact from "./images/contact.png";
import maps from "./images/maps.png";

function Contact() {
  return (
    <>
      <img
        alt=""
        src={contact}
        style={{ width: "100%", position: "relative" }}
      />
      <Container maxWidth="lg" style={{ display: "flex" }}>
        <Grid container direction="row" justify="center" spacing={3}>
          <Grid
            direction="column"
            xs={7}
            justify="center"
            style={{ marginTop: "5%" }}
          >
            <h1>TANJORE INDIAN CUISINE - BELLEVILLE</h1>
            <p>151 Pinnacle St, Belleville, ON K8N 3A5</p>
            <p>(613) 967-5967</p>
            <h1>OPERATING HOURS</h1>
            <p>Monday: CLOSED</p>
            <p>Tuesday - Sunday: 12:00 PM - 8:00 PM</p>
          </Grid>
          <Grid
            direction="column"
            xs={5}
            justify="center"
            style={{ marginTop: "5%" }}
          >
            {/* <img src={maps} style={{width: '75%', position: 'relative'}}/> */}
            <iframe
              title="maps"
              width="400"
              height="400"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAB4t2PtLtyUUM8OygsReCOzrhxXhB0Pas&q=Tanjore+North+Indian+Cuisine,Belleville+Ontario"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
