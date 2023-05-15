import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Typewriter from "typewriter-effect";


function App() {
  const [options, setOptions] = useState([]);
  const [optInput, setOptInput] = useState("");
  const [decision, setDecision] = useState("");

  const btnStyle =
    "p-4 py-2 rounded-lg  bg-dm-neon-blue hover:bg-pink-500  text-dm-black md:ml-4 md:px-8";

  function handleAdd() {
    if (optInput !== "" && optInput !== " " && optInput !== null) {
      const list = options.concat(optInput);
      setOptions(list);
      setOptInput("");
    }
  }
  function handleRemoveOption(index) {
    const newList = [...options];
    newList.splice(index, 1);
    setOptions(newList);
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
  async function handleTryWithPreviousOptions() {
   
    if (options.length > 1) {
      await setDecision("")
      handleDecision();
    } else {
      handleTry();
    }
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
          <button className={btnStyle} type="button" onClick={handleDecision}>
            Make Decision
          </button>
        ) : (
          <></>
        )}

        {decision ? (
          <div className=" text-5xl mt-10 text-dm-neon-blue font-bold">
            <Typewriter
              options={{
                strings: decision,
                autoStart: true,
                // cursor:"",
              }}
            />
          </div>
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
            <button type="button" className={btnStyle} onClick={handleAdd}>
              Add
            </button>
          </div>
        ) : (
          <br />
        )}

        {options.length > 0 ? (
          <div>
            <h2 className="m-4 text-pink-500 font-bold font-roboto text-xl">
              Options added till now:
            </h2>
            <ul className="mb-8">
              {options.map((option, index) => (
                <li
                  key={option + index}
                  className="flex justify-between items-center"
                >
                  <span className="text-lg list-none text-black">{option}</span>
                  <button
                    type="button"
                    className="px-3 mr-2 text-red-500"
                    onClick={() => handleRemoveOption(index)}
                  >
                    <MdDeleteOutline size={25}></MdDeleteOutline>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {decision ? (
          <div className="flex flex-col items-center">
            <button
              type="button"
              className={btnStyle}
              onClick={handleTryWithPreviousOptions}
            >
              Try Again
            </button>
            <div
              className="mt-5 underline  cursor-pointer hover:text-pink-500"
              onClick={handleTry}
            >
              Try again with different options
            </div>
          </div>
        ) : (
          <br></br>
        )}
      </div>
      <footer className="flex flex-col items-center justify-center h-12  bg-dm-neon-blue bottom-0 fixed w-screen text-dm-black font-roboto md:h-16">
        <h1>
          Developed with <span className="animate-pulse">❤️</span> by{" "}
          <a
            href="https://naitik-lodha.netlify.app/"
            className="text-pink-700 font-bold italic underline hover:text-yellow-500"
          >
            Naitik Lodha
          </a>
        </h1>
      </footer>
    </div>
  );
}

export default App;
