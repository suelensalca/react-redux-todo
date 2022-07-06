import { actionsTypes } from "./actionTypes";

const actions = {
  add: (task) => ({
    type: actionsTypes.ADD,
    payload: task,
  }),
  delete: (task) => ({
    type: actionsTypes.DELETE,
    payload: task,
  }),
};

export { actions };
