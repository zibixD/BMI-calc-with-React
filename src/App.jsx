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
 },
 {
  id: 2,
  title: "Underweight (Moderate thinness)",
 },
 {
  id: 3,
  title: "Underweight (Mild thinness)",
 },
 {
  id: 4,
  title: "Normal range",
 },
 {
  id: 5,
  title: "Overweight (Pre-obese)",
 },
 {
  id: 6,
  title: "Obese (Class I)",
 },
 {
  id: 7,
  title: "Obese (Class II)",
 },
 {
  id: 8,
  title: "Obese (Class III)",
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
   <BmiForm onCalculate={calculateBmiHandler} />
   <BmiInfo category={category} />
  </Box>
 );
}

export default App;
