import {
  ERROR,
  GET_TOKEN,
  LOADING,
  REMOVE_TOKEN,
  SAVE_TOKEN,
} from "./TokenTypes";

const initialState = {
  token: {},
  loading: true,
  error: null as null,
};

interface actionInterface {
  type: string;
  token?: string;
  isLoading?: boolean;
  error?: string;
}

const tokenReducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, token: action.token, loading: false };
    case SAVE_TOKEN:
      return { ...state, token: action.token, loading: false };
    case REMOVE_TOKEN:
      return { ...state, token: {}, loading: false };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default tokenReducer;
