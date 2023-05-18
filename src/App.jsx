import { Box } from "@mui/material";
import "./App.css";
import BmiForm from "./components/BmiForm";
import BmiHeading from "./components/BmiHeading";
import BmiInfo from "./components/BmiInfo";
import { useState } from "react";

const bmiCategories = [
 {
  id: 1,
  title: "Underweight (Severe thinness)",
  description: "Severe thinness starts under 16 kg/m2 in BMI rating",
 },
 {
  id: 2,
  title: "Underweight (Moderate thinness)",
  description:
   "Moderate thinness begins when BMI total is between 16 - 17 kg/m2 ",
 },
 {
  id: 3,
  title: "Underweight (Mild thinness)",
  description:
   "Underweight starts in range between 17.0 - 18.5 kg/m2 BMI rate ",
 },
 {
  id: 4,
  title: "Normal range",
  description: "Healthy range is between 18.5 - 25 kg/m2 according to BMI",
 },
 {
  id: 5,
  title: "Overweight (Pre-obese)",
  description: "Overweight begins when the BMI range is between 25-30 kg/m2",
 },
 {
  id: 6,
  title: "Obese (Class I)",
  description:
   "Obesity is a state in which energy intake chronically exceeds energy expenditure. Obesity begins above 30kg/m2",
 },
 {
  id: 7,
  title: "Obese (Class II)",
  description:
   "Second state of obesity begins when BMI rate is between 35 - 40 kg/m2",
 },
 {
  id: 8,
  title: "Obese (Class III)",
  description: "Third state of obesity starts over 40 kg/m2 in BMI rate",
 },
];

function App() {
 const [category, setCategory] = useState(bmiCategories);

 const calculateBmiHandler = (cat) => {
  setCategory((prevCategory) => {
   return [cat, ...prevCategory];
  });
 };

 return (
  <Box>
   <BmiHeading />
   <BmiForm onCalculate={calculateBmiHandler} category={category} />
   <BmiInfo category={category} />
  </Box>
 );
}

export default App;
