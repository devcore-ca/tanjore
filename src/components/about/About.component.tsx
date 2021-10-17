import React from "react";
import styles from "./About.module.css";
import about from "./images/rak.png";
import about1 from "./images/rak2.png";
import about2 from "./images/rak3.png";
import about3 from "./images/rak4.png";
import aboutus from "./images/aboutus.png";

function About() {
  return (
    <>
      <img
        alt=""
        src={aboutus}
        style={{ width: "100%", position: "relative" }}
      />
      <div>
        <div className={styles.flex}>
          <img className={styles.imageSize} src={about} alt=""></img>
          <div>
            <h1 className={styles.h1}> Our Story </h1>
            <p className={styles.p}>
              Rakesh Kumar came to Canada from MP, India in 1989 with a passion
              for food and culinary arts. He was offered a head chef position at a
              popular local Indian restaurant in Scarborough where he worked for
              over 10 years.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.flex}>
            <p className={styles.p2}>
              In 2004, Rakesh finally decided he wanted to put his culinary skills
              to the test and he and his wife Neeru opened their very own little
              takeout restaurant called Tanjore Catering & Sweets. This quickly
              became a local favourite!
            </p>
            <div>
              <img className={styles.imageSize2} src={about1} alt=""></img>
            </div>
          </div>
        </div>

        <div className={styles.flex}>
          <img className={styles.imageSize3} src={about2} alt=""></img>
          <div>
            <p className={styles.p3}>
              Wanting to provide an authentic dine in experience, in 2017 they
              decided to take the leap and expand their restaurant to a larger
              location, providing a buffet style lunch 6 days a week. Customers
              were coming from different cities to try out our savoury dishes.
              Some of our popular must tries are the Palace Naan, the Biriyanis
              and of course our mouth-watering butter chicken!
            </p>
          </div>
        </div>

        <div>
          <div className={styles.flex}>
            <p className={styles.p4}>
              Today, Tanjore is an admired family restaurant in Belleville, ON and
              even though we had to leave our dedicated customers in Scarborough,
              it definitely hasn’t stopped them from travelling here!
            </p>
            <div>
              <img className={styles.imageSize4} src={about3} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
