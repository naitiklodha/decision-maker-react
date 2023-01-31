import { useState } from "react";

function App() {
  const [options, setOptions] = useState([]);
  const [optInput, setOptInput] = useState("");
  const [decision, setDecision] = useState("");

  function handleAdd() {
    if (optInput !== "" && optInput !== " " && optInput !== null) {
      const list = options.concat(optInput);
      setOptions(list);
      setOptInput("");
    }
  }
  function handleChange(e) {
    setOptInput(e.target.value);
  }
  function handleDecision() {
    const decision_index = Math.floor(Math.random() * options.length);
    console.log(decision_index);
    setDecision(options[decision_index]);
  }
  function handleTry() {
    setDecision("");
    setOptions([]);
  }
  function handleKeyDown(e)
  {
    if(e.key==="Enter")
    {
      handleAdd();
    }

  }
  return (
    <div className="bg-black font-roboto h-screen">
      <div className="App flex flex-col items-center">
        <h1 className="text-blue-300 font-Explora text-6xl">Decision Maker</h1>
        <p className="text-white text-xs">
          This app was made only for fun. Please do not use it for making real
          life decisions.
        </p>
        {options.length > 1 && decision === "" ? (
          <button
            className="bg-pink-600  rounded-lg text-white p-2 mt-4"
            type="button"
            onClick={handleDecision}
          >
            Make Decision
          </button>
        ) : (
          <></>
        )}

        {decision ? (
          <h1 className=" text-4xl mt-10 text-pink-600">{decision} </h1>
        ) : (
          <br />
        )}

        {decision === "" ? (
          <div>
            <input
              type="text"
              value={optInput}
              placeholder="Enter the options"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="p-1 rounded-sm   border-none focus:outline-none"
            ></input>
            <button
              type="button"
              className="ml-4 p-1 rounded-lg w-20  bg-green-500 text-white"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        ) : (
          <br />
        )}

        {options.length > 0 ? (
          <h2 className="m-4 text-white">Options added till now: </h2>
        ) : (
          <></>
        )}
        <div className="flex  items-center flex-col">
          {options.map((option, index) => (
            <li
              className="text-lg list-none text-purple-600"
              key={option + index}
            >
              {option}
            </li>
          ))}
     
        </div>
        {decision ? (
            <button
              type="button"
              className="bg-green-600 p-2 px-4 mt-4 rounded-md text-white"
              onClick={handleTry}
            >
              Try Again
            </button>
          ) : (
            <br></br>
          )}
      </div>
    </div>
  );
}

export default App;
