// Core modules imports are same as usual
import { Navigation, Pagination } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
// import "swiper/swiper-bundle.min.css";
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import styles from "./SwiperGallery.module.css";

import image1 from "../../common/images/IMG_1.png";
import image2 from "../../common/images/IMG_2.png";
import image3 from "../../common/images/IMG_3.png";
import image4 from "../../common/images/IMG_4.png";
import image5 from "../../common/images/IMG_5.png";
import image6 from "../../common/images/IMG_6.png";
import image7 from "../../common/images/IMG_7.png";
import image8 from "../../common/images/IMG_8.png";

const sourceImages = [
  {
    original: image4,
    description: "Chilli Chicken",
  },
  {
    original: image1,
    description: "Authentic Tanjore Combo with Garlic Naan",
  },
  {
    original: image2,
    description: "Chicken Biryani",
  },
  {
    original: image3,
    description: "Butter Paneer",
  },
  {
    original: image5,
    description: "Veggie Briyani",
  },
  {
    original: image6,
    description: "Pani Poori Chaat",
  },
  {
    original: image7,
    description: "Chicken Pakora",
  },
  {
    original: image8,
    description: "Bhel Sev Chaat",
  },
];

const Slides = sourceImages.map((image) => {
  return (
    <div className={styles.slideWrapper}>
      <SwiperSlide>
        <div className={styles.imageContainer}>
          <span className={styles.description}>{image.description}</span>
          <img className={styles.image} src={image.original} />
        </div>
      </SwiperSlide>
    </div>
  );
});

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      navigation
      scrollbar={{ draggable: true }}
      className={styles.slideContainer}
    >
      {Slides}
    </Swiper>
  );
};
