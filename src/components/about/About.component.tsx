import React from "react";
import styles from "./About.module.css";
import about from "./images/rak.png";
import about1 from "./images/rak2.png";
import about2 from "./images/rak3.png";
import about3 from "./images/rak4.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { isTemplateHead } from "typescript";
import aboutus from "./images/aboutus.png";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "left",
  shadows: "none",
}));

function About() {
  return (
    <>
      <img
        alt=""
        src={aboutus}
        style={{ width: "100%", position: "relative" }}
      />

      <div className={styles.aboutUsContainer}>
        <Grid
          container
          spacing={2}
          rowSpacing={4}
          columns={12}
          className={styles.flex}
        >
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Item className={styles.overWrite}>
              <img className={styles.imageSize} src={about} alt=""></img>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={6}>
            <Item className={styles.overWrite}>
              <h1 className={styles.h1}> Our Story </h1>
              <p className={styles.p}>
                Rakesh Kumar came to Canada from MP, India in 1989 with a
                passion for food and culinary arts. He was offered a head chef
                position at a popular local Indian restaurant in Scarborough
                where he worked for over 10 years.
              </p>
            </Item>
          </Grid>
        </Grid>

        <Grid container columns={12} spacing={2} className={styles.flex}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Item className={styles.overWrite}>
              <p className={styles.p2}>
                In 2004, Rakesh finally decided he wanted to put his culinary
                skills to the test and he and his wife Neeru opened their very
                own little takeout restaurant called Tanjore Catering &amp;
                Sweets. This quickly became a local favourite!
              </p>
            </Item>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Item className={styles.overWrite}>
              <img className={styles.imageSize} src={about1} alt=""></img>
            </Item>
          </Grid>
        </Grid>

        <Grid spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={styles.overWrite}
          >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Item className={styles.overWrite}>
              <p className={styles.p2}>
                Wanting to provide an authentic dine in experience, in 2017 they
                decided to take the leap and expand their restaurant to a larger
                location, providing a buffet style lunch 6 days a week.
                Customers were coming from different cities to try out our
                savoury dishes. Some of our popular must tries are the Palace
                Naan, the Biriyanis and of course our mouth-watering butter
                chicken!
              </p>
            </Item>
          </Grid>
            <Item className={styles.overWrite}>
              <img className={styles.horizontalImage} src={about2} alt=""></img>
            </Item>
          </Grid>
        </Grid>

        <Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Item className={styles.overWrite}>
              <p className={styles.p2}>
                Today, Tanjore is an admired family restaurant in Belleville, ON
                and even though we had to leave our dedicated customers in
                Scarborough, it definitely hasn’t stopped them from travelling
                here!
              </p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Item className={styles.overWrite}>
              <img className={styles.horizontalImage} src={about3} alt=""></img>
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default About;
