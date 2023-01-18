import { fetchWrapper } from "../../_helpers/fetchWrapper";
import * as ActionTypes from "../ActionTypes";

const COMMON_URL = "http://localhost:5000/api/";

export const getAllProjects = () => async (dispatch) => {
  try {
    const response = await fetchWrapper.get(COMMON_URL + `projects`);
    dispatch({ type: ActionTypes.GET_ALL_PROJECTS, payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const addProject = (data) => async (dispatch) => {
  try {
    const response = await fetchWrapper.post(COMMON_URL + `projects`, {
      title: data,
    });
    dispatch({ type: ActionTypes.POST_PROJECT, payload: response });
  } catch (err) {
    console.log(err);
  }
};
