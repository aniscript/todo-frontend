import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import task from "./reducers/task";
import projects from "./reducers/projects";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      task: task,
      projects: projects,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
