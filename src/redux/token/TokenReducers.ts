import { tokenActionInterface, tokenReducerInterface } from "./TokenInterface";
import { ERROR, TOKEN_LOADED, TOKEN_REMOVED, TOKEN_SAVED } from "./TokenTypes";

const initialState: tokenReducerInterface = {
  token: null,
  error: null,
};

const tokenReducer = (state = initialState, action: tokenActionInterface) => {
  switch (action.type) {
    case TOKEN_LOADED:
      return { ...state, token: action.token };
    case TOKEN_SAVED:
      return { ...state, token: action.token };
    case TOKEN_REMOVED:
      return { ...state, token: null };
    case ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default tokenReducer;
