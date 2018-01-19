import { firebase_api } from "../../api/firebase";
import _ from "lodash";

export function saveTask({ id, text, complete }) {
  return new Promise((resolve, reject) => {
    var taskListRef = firebase_api.database().ref("tasks");
    var taskRef = taskListRef.push();
    taskRef
      .set({ id, text, complete })
      .then(() => {
        return resolve();
      })
      .catch(e => {
        return reject();
      });
  });
}

export function getTaskList() {
  return new Promise((resolve, reject) => {
    firebase_api
      .database()
      .ref(`/tasks`)
      .on("value", data => {
        const tasksList = _.map(data.val(), (key, index) => {
          return key;
        });

        return resolve(tasksList);
      });
  });
}

export function saveTaskList(newTasks) {
  return new Promise((resolve, reject) => {
    firebase_api
      .database()
      .ref("tasks")
      .set(newTasks)
      .then(() => resolve());
  });
}
