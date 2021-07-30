import React, {useState} from 'react';
import styles from './Gallery.module.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


function  myRenderItem (imageUrl: string, title: string, description: string) {
  return <div className={styles.renderItemDiv}>
        <img className="image-gallery-image" src={imageUrl} title={"Image Title"} />
        <span className={styles.imageGalleryDescription}>
          {description}
        </span>
    </div>;
}

const sourceImages = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      description: 'Description, making it longer',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      description: 'Description',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
      description: 'Description',
    },
  ];

  const images = sourceImages.map(image => (
        {
          original: image.original, 
          thumbnail: image.thumbnail, 
          renderItem: () => myRenderItem(image.original, 'Title', image.description)
        }
      )
    );

function Gallery() {
    const [showIndex, setShowIndex] = useState(false);
    const [showBullets, setShowBullets] = useState(true);
    const [showThumbnails, setShowThumbnails] = useState(true);
    const [showFullscreenButton, setShowFullscreenButton] = useState(true);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const [showNav, setShowNav] = useState(true);
    const [slideDuration, setSlideDuration] = useState(450);
    const [slideInterval, setSlideInterval] = useState(2000);
    const [useWindowKeyDown, setUseWindowKeyDown] = useState(true);


    return (
        <div className={styles.mainDiv}>
            <div className={styles.galleryPage}>Tanjore Gallery</div>
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
            />;
        </div>
    );
}

export default Gallery; 