import heropage from "./images/heroImage.png";
import Gallery from "../gallery/SwiperGallery.component";

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
      <h1 style={{ textAlign: "center" }}>OUR TOP DISHES</h1>
      <div>
        <Gallery />
      </div>
    </body>
  );
}

export default Home;
