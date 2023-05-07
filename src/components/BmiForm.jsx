import { Button, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object().shape({
    height: yup.number().required(),
    weight: yup.number().required(),
})

const BmiForm = () => {
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            // gender: "",
            height: null,
            weight: null,
        }
    });


    const submitHandler = () => {
        console.log(height)
        console.log(weight)
        let Bmi = (weight / ((height * height) / 10000)).toFixed(2)
        console.log(Bmi)
        
    }

    return(
        <form onSubmit={handleSubmit(submitHandler)}>
            <FormLabel id="radio-btn">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="radio-btn"

                {...register("gender")}
            >
                <FormControlLabel id="male" name="gender" value="male" control={<Radio/>} label="Male" required/>
                <FormControlLabel id="female" name="gender" value="female" control={<Radio />} label="Female" required/>
            </RadioGroup>
            <TextField
                {...register("height")}
                label="Height"
                type="number"
                sx={{ m: 1, width: '25ch '}}
                InputProps={{
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                }}
                onChange={(event) => setHeight(event.target.value)}
            ></TextField>
            <TextField
                {...register("weight")}
                label="Weight"
                type="number"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                }}
                onChange={(event) => setWeight(event.target.value)}
            ></TextField>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default BmiForm
