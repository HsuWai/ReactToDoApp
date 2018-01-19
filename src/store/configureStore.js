import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import root from "../sagas";
import reducers from "../reducers";

let store = null;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  let middlewares = [];
  if (!store) {
    middlewares.push(sagaMiddleware);
  }
  store = createStore(reducers, applyMiddleware(...middlewares));

  sagaMiddleware.run(root);

  return store;
}
