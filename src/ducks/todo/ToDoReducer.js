import * as Types from "./ToDoTypes";
const INITIAL_STATE = {
  tasks: [],
  id: 0,
  text: "",
  completed: false,
  filter_list: [],
  delete_id: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_DATA_REQUESTED:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };

    case Types.GET_TODO_LIST_SUCCESSED:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
