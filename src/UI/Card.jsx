import { Box } from "@mui/material";

const Card = (props) => {
 return (
  <Box
   sx={{
    backgroundColor: "rgb(31, 29, 28, 0.8)",
    border: "5px solid #d1bea7",
    boxShadow: 5,
    width: { xs: "100%", sm: 400 },
    color: "#bab5b3",
   }}
   // eslint-disable-next-line react/prop-types
  >
   {props.children}
  </Box>
 );
};

export default Card;
