import { takeLatest, put, call, select } from "redux-saga/effects";
import { saveTask, getTaskList, saveTaskList } from "./ToDoServices";
import * as Types from "./ToDoTypes";
import { tasksFilterSelector } from "./ToDoSelector";

export function* addTask(action) {
  try {
    const data = action.payload;
    yield call(saveTask, data);
    yield put({ type: Types.GET_TODO_LIST_REQUESTED });
    yield put({ type: Types.ADD_TODO_SUCCESSED });
  } catch (e) {
    yield put({ type: Types.ADD_TODO_FAILED });
  }
}

export function* getTasks(action) {
  try {
    const todo_list = yield call(getTaskList);
    yield put({ type: Types.GET_TODO_LIST_SUCCESSED, payload: todo_list });
  } catch (e) {
    console.log(e);
  }
}

export function* deleteTask(action) {
  try {
    const response = yield select(tasksFilterSelector);
    console.log("Selector response ", response);
    yield call(saveTaskList, response);
    yield put({
      type: Types.GET_TODO_LIST_REQUESTED
    });
    yield put({ type: Types.DELETE_TODO_LIST_SUCCESSED });
  } catch (e) {
    yield put({ type: Types.DELETE_TODO_LIST_FAILED, message: e.message });
  }
}

export default function* watchToDoSaga() {
  yield takeLatest(Types.ADD_TODO_REQUESTED, addTask);
  yield takeLatest(Types.GET_TODO_LIST_REQUESTED, getTasks);
  yield takeLatest(Types.DELETE_TODO_LIST_REQUESTED, deleteTask);
}
