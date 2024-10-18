import Header from "./images/MenuHeader.png";
import menuImage1 from "./images/menuImage1.jpg";
import menuImage2 from "./images/menuImage2.jpg";
import style from "./Menu.module.css";

function Menu() {
  return (
    <body>
      <img src={Header} alt="banner" className={style.menuHeader} />

      <img alt="menu1" src={menuImage1} className={style.menuImage2} />

      <img alt="menu2" src={menuImage2} className={style.menuImage2} />
    </body>
  );
}
export default Menu;
