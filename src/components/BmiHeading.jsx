import { Box, Typography } from "@mui/material";

const BmiHeading = () => {
 return (
  <Box
   sx={{
    backgroundColor: "white",
    boxShadow: 8,
   }}
  >
   <Typography
    variant='h2'
    sx={{
     textAlign: "center",
     fontSize: { xs: "3rem", sm: "3.7em" },
     p: 2,
    }}
   >
    Welcome to your BMI calculator!
   </Typography>
  </Box>
 );
};

export default BmiHeading;
