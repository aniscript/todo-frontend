const initialState = {
  task: [],
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_TASK":
      return {
        ...state,
        task: action.payload,
      };
    case "POST_TASK":
      return {
        ...state,
        task: [action.payload, ...state.task],
      };
    default:
      return state;
  }
}
