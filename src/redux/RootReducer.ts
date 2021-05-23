import { combineReducers } from "redux";
import tokenReducer from "./token/TokenReducers";

const rootReducer = combineReducers({
  tokenReducerState: tokenReducer,
});

export default rootReducer;
