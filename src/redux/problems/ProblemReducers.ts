import {
  problemActionInterface,
  problemReducerInterface,
} from "./ProblemInterface";
import { PROBLEM_LOADED_WITH_PAGE } from "./ProblemTypes";

const initialState: problemReducerInterface = {
  problems: null,
  page: 0,
};

const problemsReducer = (
  state = initialState,
  action: problemActionInterface
) => {
  switch (action.type) {
    case PROBLEM_LOADED_WITH_PAGE:
      return {
        ...state,
        problems: { ...state }.problems.concat(action.problems),
        page: action.page,
      };
    default:
      return state;
  }
};

export default problemsReducer;
