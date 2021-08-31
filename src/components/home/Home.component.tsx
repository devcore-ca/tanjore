import React from 'react';
import styles from './Home.module.css';
import Footer from './components/footer/Footer';

function Home() {
  return (
    <div className={styles.homePage}>Home Page of Tanjore</div>
    <Footer/>
  );
}

export default Home;
