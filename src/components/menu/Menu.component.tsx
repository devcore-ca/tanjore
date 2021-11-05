import React from "react";
import Menu1 from './images/menu1.png'; 
import Header from './images/MenuHeader.png';
import Menu2 from './images/menu2.png';
import style from './Menu.module.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


 function Menu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (

  <body>

  <img src = {Header} className = {style.menuHeader}/>
  
  <div>

  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modalMenu1"
        aria-describedby="modalMenu1des"
      >
       <Box className = {style.boxStyle}>
       <Typography id="modalMenu1" color = "white"  >
           Menu Image 11111111111111111111111
           <Button>
             Prev
           </Button>
         </Typography>
         <Typography id="modalMenu1des" >
           <img src = {Menu2} className = {style.menuImageLightBox} />
         </Typography>
         </Box> 
      </Modal>
  </div>

      <img src = {Menu2} className = {style.menuImage2} onClick = {handleOpen}/>
      

 <div>
 <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modalMenu2"
        aria-describedby="modalMenu2des"
      >
       <Box className = {style.boxStyle}>
       <Typography id="modalMenu2" color = "white"  >
           Menu Image 2
           <Button className = {style.modalNextButton}>
             Prev
           </Button>
         </Typography>
         <Typography id="modalMenu2des" >
           <img src = {Menu1} className = {style.menuImageLightBox} />
         </Typography>
         </Box> 
      </Modal>
  </div>
 
      <a onClick = {handleOpen}>
      <img src = {Menu1} className = {style.menuImage1}/>
      </a>
    
  </body>

  );
}
export default Menu;
