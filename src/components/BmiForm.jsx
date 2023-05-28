import {
 Box,
 FormControlLabel,
 FormLabel,
 InputAdornment,
 Radio,
 RadioGroup,
 TextField,
 Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import ResultModal from "../UI/Modal";

const schema = yup.object().shape({
 height: yup.number().required(),
 weight: yup.number().required(),
});

// eslint-disable-next-line react/prop-types
const BmiForm = () => {
 const [height, setHeight] = useState();
 const [weight, setWeight] = useState();
 const [resultBmi, setResultBmi] = useState();
 const [title, setTitle] = useState();
 const [showModal, setShowModal] = useState(false);
 const { register, handleSubmit } = useForm({
  resolver: yupResolver(schema),
  defaultValues: {
   height: null,
   weight: null,
   resultBmi: null,
  },
 });

 const submitHandler = () => {
  setResultBmi((weight / ((height * height) / 10000)).toFixed(2));
  setShowModal(true);
 };

 useEffect(() => {
  if (resultBmi < 16) {
   setTitle("Severe thinness");
  } else if (resultBmi >= 16 && resultBmi < 17) {
   setTitle("Moderate thinness");
  } else if (resultBmi >= 17 && resultBmi < 18.5) {
   setTitle("Mild thinness");
  } else if (resultBmi >= 18.5 && resultBmi < 25) {
   setTitle("Normal range");
  } else if (resultBmi >= 25 && resultBmi < 30) {
   setTitle("OverWeight (Pre-obese)");
  } else if (resultBmi >= 30 && resultBmi < 35) {
   setTitle("Obese (Class I)");
  } else if (resultBmi >= 35 && resultBmi < 40) {
   setTitle("Obese (Class II)");
  } else {
   setTitle("Obese (Class III)");
  }
 }, [resultBmi]);

 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "space-around",
    padding: "1rem",
   }}
  >
   <form onSubmit={handleSubmit(submitHandler)}>
    <Typography variant='h3'>Calculate your BMI now!</Typography>
    <FormLabel id='radio-btn'>Gender</FormLabel>
    <RadioGroup aria-labelledby='radio-btn' {...register("gender")}>
     <FormControlLabel
      id='male'
      name='gender'
      value='male'
      control={<Radio />}
      label='Male'
      required
     />
     <FormControlLabel
      id='female'
      name='gender'
      value='female'
      control={<Radio />}
      label='Female'
      required
     />
    </RadioGroup>
    <TextField
     {...register("height")}
     label='Height'
     type='number'
     sx={{ m: 1, width: "25ch " }}
     InputProps={{
      endAdornment: <InputAdornment position='end'>Cm</InputAdornment>,
     }}
     onChange={(event) => setHeight(event.target.value)}
    ></TextField>
    <TextField
     {...register("weight")}
     label='Weight'
     type='number'
     sx={{ m: 1, width: "25ch" }}
     InputProps={{
      endAdornment: <InputAdornment position='end'>Kg</InputAdornment>,
     }}
     onChange={(event) => setWeight(event.target.value)}
    ></TextField>
    <ResultModal
     onSubmit={(weight, height) =>
      setResultBmi(weight / ((height * height) / 10000))
     }
     showModal={showModal}
     {...register("resultBmi")}
     resultBmi={resultBmi}
     title={title}
    ></ResultModal>
   </form>
  </Box>
 );
};

export default BmiForm;
