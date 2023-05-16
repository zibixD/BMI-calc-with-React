import {
 FormControlLabel,
 FormLabel,
 InputAdornment,
 Radio,
 RadioGroup,
 TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ResultModal from "../UI/Modal";

const schema = yup.object().shape({
 height: yup.number().required(),
 weight: yup.number().required(),
});

// eslint-disable-next-line react/prop-types
const BmiForm = (category) => {
 const [height, setHeight] = useState();
 const [weight, setWeight] = useState();
 const [resultBmi, setResultBmi] = useState();
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

 return (
  <>
   <form onSubmit={handleSubmit(submitHandler)}>
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
     category={category}
    ></ResultModal>
   </form>
  </>
 );
};

export default BmiForm;
