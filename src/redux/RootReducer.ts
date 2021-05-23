import { combineReducers } from "redux";
import tokenReducer from "./token/TokenReducers";

const rootReducer = combineReducers({
  token: tokenReducer,
});

export default rootReducer;
