import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const isDurationValid = userInput.duration >= 1;

  function handleOnChange(identificator, newValue) {
    setUserInput((prevValue) => ({
      ...prevValue,
      [identificator]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleOnChange} userInput={userInput} />
      {isDurationValid && <Results userInput={userInput} />}
      {!isDurationValid && (
        <p id="error-message">Please enter duration greater thatn zero!</p>
      )}
    </>
  );
}

export default App;
