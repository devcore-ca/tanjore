import React from 'react';
import styles from './Home.module.css';
import heropage from './images/tanjoreCroppedLogo.png';
import Gallery from '../gallery/Gallery.component';
import Footer from '../footer/Footer';

function Home() {
  return (
    <body>
    <div >
    <img src = {heropage} style = {{
      width:"100%",
    }}/>
      </div>

      <div>
        <Gallery/>
      </div>

      <div>
        <Footer/>
      </div>

      </body>
    
  );
} 

export default Home;
