import { Popper, Box, Fade, Typography } from "@mui/material";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";

const PopperInfo = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [anchorEl, setAnchorEl] = useState(null);

 const clickHandler = (event) => {
  setAnchorEl(event.currentTarget);
  setIsOpen((previousOpen) => !previousOpen);
 };

 //  const closeHandler = () => setIsOpen(false);

 const canBeOpen = open && Boolean(anchorEl);
 const id = canBeOpen ? "transition-popper" : undefined;

 return (
  <>
   <InfoIcon aria-describedby={id} onClick={clickHandler} />
   <Popper
    id={id}
    open={isOpen}
    anchorEl={anchorEl}
    placement='right-end'
    disablePortal={true}
    modifiers={[
     {
      name: "arrow",
      enabled: true,
     },
    ]}
   >
    {({ TransitionProps }) => <Fade {...TransitionProps} timeout={350}></Fade>}
    <Box sx={{ border: "1px solid black", backgroundColor: "white" }}>
     <Typography sx={{ p: 2 }}>Popper </Typography>
     {/* nie działa fade, przejście */}
    </Box>
   </Popper>
  </>
 );
};

export default PopperInfo;
