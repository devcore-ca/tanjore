import React from "react";
import styles from "./Home.module.css";
import heropage from "./images/heroImage.png";
import Gallery from "../gallery/Gallery.component";

function Home() {
  return (
    <body>
      <div>
        <img
          alt=""
          src={heropage}
          style={{
            width: "100%",
          }}
        />
      </div>
      <div>
        <Gallery rengerHeroImage={false}/>
      </div>
    </body>
  );
}

export default Home;
