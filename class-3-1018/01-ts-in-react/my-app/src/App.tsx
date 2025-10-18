import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
import Form from "./components/Form";
import MultiInputForm from "./components/MultiInputForm";
import BasicForm from "./components/BasicForm";
import LoopForm from "./components/LoopForm";

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
      {/* <Form></Form>
      <MultiInputForm></MultiInputForm> */}
      <BasicForm></BasicForm>
      <LoopForm></LoopForm>
    </>
  );
}

export default App;
