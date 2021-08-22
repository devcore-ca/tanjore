import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.flex}>
      <img
        className={styles.imageSize}
        src="https://www.ledr.com/colours/grey.jpg"
        alt=""
      ></img>
      <div>
        <h1 className={styles.h1}> Our Story </h1>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          sollicitudin nunc rhoncus dui pretium vulputate. Fusce eget cursus
          metus. Sed at suscipit quam. Donec scelerisque mattis pulvinar. Nunc
          nunc odio, aliquam id quam vel, aliquam rutrum lectus. Vestibulum
          blandit aliquet accumsan.
        </p>
      </div>
    </div>
  );
}

export default About;
