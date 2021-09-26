import React, { useState } from "react";
import styles from "./Gallery.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import image1 from "../../common/images/IMG_1.png";
import image2 from "../../common/images/IMG_2.png";
import image3 from "../../common/images/IMG_3.png";

function myRenderItem(imageUrl: string, description: string) {
  return (
    <div className={styles.renderItemDiv}>
      <img className="image-gallery-image" src={imageUrl} />
      <span className={styles.imageGalleryDescription}>{description}</span>
    </div>
  );
}

const sourceImages = [
  {
    original: image1,
    description: "Authentic Tanjore Combo with Garlic Naan",
  },
  {
    original: image2,
    description: "Biriyani",
  },
  {
    original: image3,
    description: "Butter Paneer",
  },
];

const images = sourceImages.map((image) => ({
  original: image.original,
  thumbnail: image.original,
  renderItem: () => myRenderItem(image.original, image.description),
}));

function Gallery() {
  const [showIndex] = useState(false);
  const [showBullets] = useState(true);
  const [showThumbnails] = useState(true);
  const [showPlayButton] = useState(true);
  const [showNav] = useState(true);
  const [slideDuration] = useState(450);
  const [slideInterval] = useState(2000);

  return (
    <div>
      {/* <div className={styles.galleryPage}>Tanjore Gallery</div> */}
      <ImageGallery
        items={images}
        showBullets={showBullets}
        showIndex={showIndex}
        showThumbnails={showThumbnails}
        lazyLoad={true}
        showPlayButton={showPlayButton}
        showNav={showNav}
        slideInterval={slideInterval}
        slideDuration={slideDuration}
      />
    </div>
  );
}

export default Gallery;
