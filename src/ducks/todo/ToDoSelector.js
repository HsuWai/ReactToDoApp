import { createSelector } from "reselect";
import _ from "lodash";
export const tasksSelector = state => state.todo.tasks;
export const taskDeleteSelector = state => state.todo.delete_id;
export const tasksFilterSelector = createSelector(
  tasksSelector,
  taskDeleteSelector,
  (tasks, key) => {
    let filter_tasks = _.filter(tasks, item => {
      return item.id !== key;
    });
    return filter_tasks;
  }
);
