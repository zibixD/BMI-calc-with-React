import {
 Typography,
 ListItem,
 IconButton,
 ListItemText,
 List,
 Box,
} from "@mui/material";
import Card from "../UI/Card";
import PopperInfo from "../UI/PopperInfo";
// eslint-disable-next-line react/prop-types
const BmiInfo = (category) => {
 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "space-evenly",
   }}
  >
   <Card>
    <Typography variant='h4'>What is BMI?</Typography>
    <Typography variant='subtitle1'>
     Body mass index (BMI) is a value derived from the mass (weight) and height
     of a person. The BMI is defined as the body mass divided by the square of
     the body height, and is expressed in units of kg/m2, resulting from mass in
     kilograms and height in metres.
    </Typography>
   </Card>
   <Card>
    <Typography variant='h4'>Categories</Typography>
    <List
     sx={{
      width: "100%",
      maxWidth: 360,
      backgroundColor: "background.paper",
     }}
    >
     {category.category.map((cat) => (
      <ListItem
       key={cat.id}
       disableGutters
       secondaryAction={
        <IconButton aria-label='comment'>
         <PopperInfo></PopperInfo>
        </IconButton>
       }
      >
       <ListItemText
        sx={{
         pl: 3,
        }}
        primary={cat.title}
       />
      </ListItem>
     ))}
    </List>
   </Card>
   <Card>
    <Typography variant='h4'>BMI interpretation</Typography>
    <Typography variant='subtitle1'>
     Interpretation of BMI numbers is based on weight status groupings, such as
     underweight, healthy weight, overweight, and obese, that are adjusted for
     age and sex. For all adults over age 20, BMI numbers correlate to the same
     weight status designations. For example, a BMI for adult women and men
     between 18.5 and 24.9 is considered healthy. A BMI lower than 18.5 is
     considered underweight, whereas a BMI between 25.0 and 29.9 equates with
     overweight and 30.0 and above with obesity. Definitions of overweight and
     obesity are more difficult to quantify for children, whose BMI changes with
     age.
    </Typography>
   </Card>
  </Box>
 );
};

export default BmiInfo;
