import { actionsTypes } from "../actions/actionTypes";

const INITIAL_STATE = {
  task: [
    { id: 0, value: "estudar redux" },
    { id: 1, value: "dormir" },
  ],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD:
      return {
        task: [...state.task, { ...action.payload }],
      };
    case actionsTypes.DELETE:
      return {
        task: state.task.filter((x) => x.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { taskReducer };
