import React from "react";
import img1 from './images/Menu1.png'; 
import header from './images/Header.png';
import img2 from './images/Menu2.png';
import style from './Menu.module.css';
import Footer from '../footer/Footer';


 function Menu() {
   const image1 = "https://www.notion.so/janac/Menu-Page-dishes-c97e397570384b69a4ce291d02dde758#88140f350d3e40d5986c2a7791ae3709";
  return (

  <body>

  <img src = {header}
   style = {{
   width:"100%",
   position: "relative"}}
   />
  

 
  <div 
      style = {{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr"}}
    >

  <div 
    style = {{
    width: "600px",
    height: "475px",
    padding: "130px 50px 0px 115px",
  position: "relative"}}
    
    >

    <a href = {img2}><img src = {img2} className = {style.image2}/></a>

  </div>
  

  <div style = {{
    width: "600px",
    height:"475px",
    padding: "130px 0px 0px 53px",
  position: "relative"}}
    >


<a href = {img1}><img src = {img1} className = {style.image1}/></a>

  </div>
</div>

  <div className = {style.footer}>
  <Footer/>
    </div>
  </body>

        
    
  );
}
export default Menu;
