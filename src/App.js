import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          // onKeyPress={(e) => {
          //   if (e.key === "Enter") {
          //     send({ type: "NEWTODO.COMMIT", value: e.target.value });
          //   }
          // }}
          // onChange={(e) =>
          //   send({ type: "NEWTODO.CHANGE", value: e.target.value })
          // }
          onChange={console.log}
          value={'todo'}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={false}
          onChange={console.log}
          // onChange={() => {
          //   send(markEvent);
          // }}
        />
        <label htmlFor="toggle-all" title={`Mark all as {mark}`}>
          Mark all as {/*mark*/}
        </label>
        <ul className="todo-list">
          {/* {filteredTodos.map((todo) => (
            <Todo key={todo.id} todoRef={todo.ref} />
          ))} */}
        </ul>
      </section>
      {!!todos.length && (
        <footer className="footer">
          <span className="todo-count">
            {/* <strong>{numActiveTodos}</strong> item */}
            {/* {numActiveTodos === 1 ? "" : "s"} left */}
          </span>
          <ul className="filters">
            <li>
              <a
                // className={cn({
                //   selected: filter === "all"
                // })}
                href="#/"
              >
                All
              </a>
            </li>
            <li>
              <a
                // className={cn({
                //   selected: filter === "active"
                // })}
                href="#/active"
              >
                Active
              </a>
            </li>
            <li>
              <a
                // className={cn({
                //   selected: filter === "completed"
                // })}
                href="#/completed"
              >
                Completed
              </a>
            </li>
          </ul>
          {/* {numActiveTodos < todos.length && (
            <button
              onClick={(_) => send("CLEAR_COMPLETED")}
              className="clear-completed"
            >
              Clear completed
            </button>
          )} */}
        </footer>
      )}
    </section>
  );
}

export default App;
