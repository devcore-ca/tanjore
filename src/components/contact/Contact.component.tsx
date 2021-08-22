import React from 'react';
import { Grid, Container } from '@material-ui/core';
import contact from './images/contact.png';
import maps from './images/maps.png'

function Contact() {
  return (
    <>
      <img src={contact} style={{width: '100%', position: 'relative'}}/>
      <Container maxWidth='lg'> 
        <Grid container direction="row" justify="center" spacing={3}>
          <Grid direction="column" xs={7} justify="center" > 
            <h1>
              TANJORE INDIAN CUSINSE - BELLEVILLE
            </h1>
            <p>
              151 Pinnacle St, Belleville, ON K8N 3A5
            </p>
            <p>
              (613) 967-5967
            </p>
            <h1>
              OPERATING HOURS
            </h1>
            <p>
              Monday: CLOSED
            </p>
            <p>
              Tuesday - Sunday: 12:00 PM - 8:00 PM 
            </p>
          </Grid>
          <Grid direction="column" xs={5} justify="center" >
            <img src={maps} style={{width: '75%', position: 'relative'}}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
