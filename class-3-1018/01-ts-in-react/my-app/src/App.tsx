import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting name={"World :)"}></Greeting>
      <Button
        type="button"
        onClick={() => {
          console.log("click btn!");
        }}
      >
        my button
      </Button>
    </>
  );
}

export default App;
