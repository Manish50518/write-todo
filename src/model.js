import { useState } from "react";
import "./Model.css";

const Model = ({ closeModel, addTodo }) => {
  //why this { closeModel, addTodo } in {}
  const [input, setInput] = useState("");

  const inputTodo = (e) => {
    setInput(e.target.value);
  };

  const onAddTodo = () => {
    addTodo(input);
    setInput("");
  };
  // const oncloseModel = () => {
  //   closeModel(false);
  // };

  return (
    <div className="modal">
      <div className="modalbody">
        <header>
          <h3>write some text</h3>
        </header>
        <div className="main-cont">
          <input
            className="model-input"
            type="text"
            onChange={inputTodo}
            value={input}
            placeholder="Add Some Fantastic"
          />

          <button className="model-btn" onClick={onAddTodo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="todo-add-logo"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="close-cont">
          <button onClick={closeModel} className="close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="close-logo"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
