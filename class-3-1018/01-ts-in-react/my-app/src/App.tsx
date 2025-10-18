import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
import Form from "./components/Form";
import MultiInputForm from "./components/MultiInputForm";

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
      <Form></Form>
      <MultiInputForm></MultiInputForm>
    </>
  );
}

export default App;
