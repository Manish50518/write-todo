import { useState } from "react";
import "./App.css";
import Model from "./model";

function App() {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);
  const [model, setModel] = useState(false);

  // const inputText = (e) => {
  //   setInput(e.target.value);
  // };

  const addTodo = (inputrec) => {
    if (inputrec === "") return;

    const value = { todoText: inputrec, isDone: false, id };
    setId(id + 1);

    setTodo((previous) => {
      return [...previous, value];
    });
    // setInput(""); // no use because the after adding the modle will be again genrated in the page
  };

  const tickedData = (i) => {
    const todoData = [...todo];
    const index = todoData.findIndex((data) => data.id === i);
    todoData[index].isDone = !todoData[index].isDone;
    setTodo(todoData);
  };

  const deleteTodo = (i) => {
    const todoData = [...todo];
    const removedTodo = todoData.filter((data) => data.id !== i);
    setTodo(removedTodo);
  };

  const openModel = () => {
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  //
  //

  return (
    <div className="App">
      <header className="main-header">
        <h1>Write ToDo bro...</h1>

        <p>
          TaskMaster is your ultimate productivity companion. Whether you’re a
          busy professional, a student, or simply someone who wants to stay
          organized, TaskMaster has got you covered. With its sleek design and
          powerful features, managing your tasks has never been this efficient.
        </p>
        <article>
          "Well done is better than well said." <a>— Benjamin Franklin</a>
        </article>

        <p>Add your task by clicking the button given below</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="down-logo"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </header>
      <button onClick={openModel} className="add-todo">
        <p> Add Todo bro</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="add-logo"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <div className="list-todo">
        <ul>
          {todo.map((data, index) => (
            <li key={index} className={`${data.isDone ? "strickout" : " "}`}>
              <input
                type="checkbox"
                className="input-todo"
                onChange={() => tickedData(data.id)}
              />

              <b>{data.todoText}</b>

              <div className="in-del">
                <button
                  onClick={() => deleteTodo(data.id)}
                  className="delete-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="down-logo"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {model && <Model closeModel={closeModel} addTodo={addTodo} />}
    </div>
  );
}

export default App;
