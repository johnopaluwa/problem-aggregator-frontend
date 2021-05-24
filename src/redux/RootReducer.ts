import { combineReducers } from "redux";
import problemsReducer from "./problems/ProblemReducers";

const rootReducer = combineReducers({
  problemsReducerState: problemsReducer,
});

export default rootReducer;
