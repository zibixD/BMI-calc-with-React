import { Box, Button, Modal, Typography, Slide } from "@mui/material";
import { useState, forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
 return <Slide direction='up' ref={ref} {...props} />;
});
// eslint-disable-next-line react/prop-types
const ResultModal = ({ showModal, resultBmi }) => {
 const [isOpen, setIsOpen] = useState();

 const openHandler = () => {
  if (showModal) {
   setIsOpen(true);
  }
 };

 const closeHandler = () => setIsOpen(false);

 return (
  <Box>
   <Button type='submit' onClick={openHandler}>
    submit
   </Button>
   <Modal open={isOpen} onClose={closeHandler} transitionComponent={Transition}>
    <Box
     sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 600,
      background: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
     }}
    >
     <Typography variant='h2'>Twój wskaźnik Bmi wynosi:</Typography>
     <Typography variant='h3'>{resultBmi}</Typography>
    </Box>
   </Modal>
  </Box>
 );
};

export default ResultModal;
