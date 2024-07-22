import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./Components/Buttons";
import TextArea from "./Components/TextArea";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
      <h1 className={styles.h}>CALCULATOR</h1>
      <div className={styles.calculator}>
        <TextArea displayValue={calVal}></TextArea>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </center>
  );
}

export default App;
