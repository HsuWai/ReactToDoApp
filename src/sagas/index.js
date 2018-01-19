import { fork } from "redux-saga/effects";
import watchToDoSaga from "../ducks/todo/ToDoSaga";

export default function* rootSaga() {
  yield fork(watchToDoSaga);
}
