import { useState } from "react";

function App() {
  const [options, setOptions] = useState([]);
  const [optInput, setOptInput] = useState("");
  const [decision, setDecision] = useState("");

  const btnStyle="p-8 py-4 rounded-lg  bg-dm-neon-blue hover:bg-purple-500  text-dm-black md:ml-4 md:py-2";

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
    setDecision(options[decision_index]);
  }
  function handleTry() {
    setDecision("");
    setOptions([]);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAdd();
    }

  }
  return (
    <div className="flex flex-col items-center bg-dm-yellow font-roboto h-screen">
      <div className="flex  flex-col items-center">
        <h1 className=" text-dm-black font-bold text-4xl my-8 md:text-6xl">
          Decision Maker
        </h1>

        {options.length > 1 && decision === "" ? (
          <button
            className={btnStyle}
            type="button"
            onClick={handleDecision}
          >
            Make Decision
          </button>
        ) : (
          <></>
        )}

        {decision ? (
          <h1 className=" text-5xl animate-pulse mt-10 text-pink-500">
            {decision}{" "}
          </h1>
        ) : (
          <br />
        )}

        {decision === "" ? (
          <div className="flex flex-col justify-center mt-4  md:flex-row">
            <input
              type="text"
              value={optInput}
              placeholder="Enter the options"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="p-2 rounded-md text-black border-2 mb-4 bg-transparent  border-black focus:outline-none md:mb-0 placeholder:text-gray-800"
            ></input>
            <button
              type="button"
              className={btnStyle}
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        ) : (
          <br />
        )}

        {options.length > 0 ? (
          <h2 className="m-4 text-dm-neon-blue font-bold font-roboto text-xl">
            Options added till now:{" "}
          </h2>
        ) : (
          <></>
        )}
        <div className="flex  items-center mb-8 flex-col">
          {options.map((option, index) => (
            <li className="text-lg list-none text-black" key={option + index}>
              {option}
            </li>
          ))}
        </div>
        {decision ? (
          <button
            type="button"
            className={btnStyle}
            onClick={handleTry}
          >
            Try Again
          </button>
        ) : (
          <br></br>
        )}
      </div>
      <footer className="flex flex-col items-center justify-center h-16 bg-dm-neon-blue bottom-0 fixed w-screen text-dm-black font-roboto">

        <h1>Developed by <a href="https://github.com/naitik-lodha" className="hover:text-dm-yellow">Naitik Lodha</a></h1>
      </footer>
    </div>
  );
}

export default App;
