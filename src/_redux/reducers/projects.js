const initialState = {
  projects: [],
};

export default function projects(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "POST_PROJECT":
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    default:
      return state;
  }
}
