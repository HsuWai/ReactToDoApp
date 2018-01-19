import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateTask,
  addTask,
  fetchTasks,
  deleteTask
} from "../ducks/todo/ToDoActions";
import ToDoItems from "../components/ToDoItems";
import "./styles/ToDoList.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, value: "", complete: false, tasks: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = Date.now();
    this.setState({ value: "" });
    this.props.addTask({ id, text: this.state.value, complete: false });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.updateTask({ prop: "text", value: event.target.value });
  }

  deleteToDo(key) {
    console.log("Delete ", key);
    this.props.updateTask({ prop: "delete_id", value: key });
    this.props.deleteTask();
  }

  render() {
    return (
      <div>
        <div className="ToDo">
          <h2 className="ToDo-header"> TO DO LIST</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="task"
              placeholder="Enter task"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <ToDoItems entries={this.props.tasks} delete={this.deleteToDo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { text, tasks } = state.todo;
  return { text, tasks };
};

export default connect(mapStateToProps, {
  updateTask,
  addTask,
  fetchTasks,
  deleteTask
})(ToDoList);
