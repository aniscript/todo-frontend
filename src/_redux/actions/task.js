import { fetchWrapper } from "../../_helpers/fetchWrapper";
const COMMON_URL = "http://localhost:5000/api/";

export const getAllTasks = () => async (dispatch) => {
  try {
    const response = await fetchWrapper.get(COMMON_URL + `tasks`);
    dispatch({ type: "GET_ALL_TASK", payload: response });
  } catch (err) {
    console.log(err);
  }
};
