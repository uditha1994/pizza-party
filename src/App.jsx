import { useState } from "react";
import OVEN from './patterns/PizzaOven'
import PizzaBuilder from "./patterns/PizzaBuilder";

function App(){

  //singleton Demo
  const oven1 = OVEN
  const oven2 = OVEN
  console.log(oven1 === oven2);

}

export default App;