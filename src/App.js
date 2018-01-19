import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./routers/Home";
import ToDoList from "./routers/ToDoList";

const App = () => (
  <div>
    <header>
      <Link style={{ margin: 10 }} to="/">
        Home
      </Link>
      <Link to="/todolist">To Do</Link>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/todolist" component={ToDoList} />
    </main>
  </div>
);

export default App;
