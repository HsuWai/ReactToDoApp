import React, { Component } from "react";
import "./styles/ToDoItems.css";

class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <a href="#" key={item.id}>
        <li onClick={() => this.delete(item.id)} key={item.id}>
          {item.text}
        </li>
      </a>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <div>
        <ul className="Item">{listItems}</ul>
      </div>
    );
  }
}

export default TodoItems;
