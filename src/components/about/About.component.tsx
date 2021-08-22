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
          blandit aliquet accumsan. Integer interdum aliquam velit quis
          placerat. Suspendisse accumsan euismod libero, congue dignissim ipsum
          fringilla vel. Nunc varius leo eget erat euismod sagittis. Sed
          vulputate pharetra dolor ut gravida. Donec dignissim vehicula nisl, ut
          maximus purus porta eu. Suspendisse vestibulum elementum dui, et
          dictum est consequat a. Sed quis orci vitae nulla tristique
          ullamcorper.
        </p>
      </div>
    </div>
  );
}

export default About;
