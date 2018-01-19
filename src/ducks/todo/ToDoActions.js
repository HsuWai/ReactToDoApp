import * as Types from "./ToDoTypes";
export const updateTask = value => {
  return {
    type: Types.UPDATE_DATA_REQUESTED,
    payload: value
  };
};

export const addTask = ({ id, text, complete }) => {
  return {
    type: Types.ADD_TODO_REQUESTED,
    payload: { id, text, complete }
  };
};

export const fetchTasks = () => {
  return {
    type: Types.GET_TODO_LIST_REQUESTED
  };
};

export const deleteTask = () => {
  return {
    type: Types.DELETE_TODO_LIST_REQUESTED
  };
};
