import { combineReducers } from "redux";
import { taskReducer } from "./task.reducer";

const reducers = combineReducers({
  taskReducer,
});

export { reducers };
