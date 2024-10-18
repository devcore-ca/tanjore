import React from "react";
import Header from "./images/MenuHeader.png";
import menuImage1 from "./images/menuImage1.jpg";
import menuImage2 from "./images/menuImage2.jpg";
import style from "./Menu.module.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Menu() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  const styles = {
    "&.MuiButton-root": {
      border: "2px black solid",
    },
    "&.MuiButton-text": {
      color: "white",
    },
    "&.MuiButton-contained": {
      color: "yellow",
    },
    "&.MuiButton-outlined": {
      color: "brown",
    },
  };
  return (
    <body>
      <img src={Header} alt="banner" className={style.menuHeader} />

      <div>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modalMenu1"
          aria-describedby="modalMenu1des"
        >
          <Box className={style.boxStyle}>
            <Button
              variant="text"
              onClick={handleClose2}
              sx={styles}
              className={style.menuLightBoxCloseButton}
            >
              X
            </Button>
            <img
              alt="menu1"
              src={menuImage1}
              className={style.menuImageLightBox1}
            />
          </Box>
        </Modal>
      </div>

      <img
        alt="menu1"
        src={menuImage1}
        className={style.menuImage2}
        onClick={handleOpen2}
      />

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modalMenu2"
          aria-describedby="modalMenu2des"
        >
          <Box className={style.boxStyle}>
            <Button
              variant="text"
              onClick={handleClose}
              sx={styles}
              className={style.menuLightBoxCloseButton}
            >
              X
            </Button>
            <img
              alt="menu2"
              src={menuImage2}
              className={style.menuImageLightBox2}
            />
          </Box>
        </Modal>
      </div>

      <img
        alt="menu2"
        src={menuImage2}
        className={style.menuImage2}
        onClick={handleOpen}
      />
    </body>
  );
}
export default Menu;
