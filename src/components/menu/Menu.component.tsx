import React from "react";
import Menu1 from "./images/menu1.png";
import Header from "./images/MenuHeader.png";
import Menu2 from "./images/menu2.png";
import style from "./Menu.module.css";

function Menu() {
  return (
    <body>
      <img alt="" src={Header} className={style.menuHeader} />

      <div className={style.menuPageParentDiv}>
        <div className={style.menuImage2Div}>
          <a href={Menu2}>
            <img alt="" src={Menu2} className={style.menuImage2} />
          </a>
        </div>

        <div className={style.menuImage1Div}>
          <a href={Menu1}>
            <img alt="" src={Menu1} className={style.menuImage1} />
          </a>
        </div>
      </div>
    </body>
  );
}
export default Menu;
