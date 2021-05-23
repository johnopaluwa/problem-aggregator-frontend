import AsyncStorage from "@react-native-community/async-storage";
import {
  ERROR,
  GET_TOKEN,
  LOADING,
  REMOVE_TOKEN,
  SAVE_TOKEN,
} from "./TokenTypes";

export interface tokenInterface {
  userToken: string;
}

export const getToken = (token: tokenInterface) => ({
  type: GET_TOKEN,
  token,
});

export const saveToken = (token: string) => ({
  type: SAVE_TOKEN,
  token,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const loading = () => ({
  type: LOADING,
});

export const error = (error: string) => ({
  type: ERROR,
  error,
});

// Effects
export const getUserToken = () => (dispatch: any) => {
  dispatch(loading());
  AsyncStorage.getItem("userToken")
    .then((data) => {
      dispatch(getToken(JSON.parse(data)));
    })
    .catch((err) => {
      dispatch(error(err.message || "ERROR"));
    });
};

export const saveUserToken = (data: tokenInterface) => (dispatch: any) => {
  dispatch(loading());
  AsyncStorage.setItem("userToken", JSON.stringify(data))
    .then((_data) => {
      dispatch(saveToken("token saved"));
    })
    .catch((err) => {
      dispatch(error(err.message || "ERROR"));
    });
};

export const removeUserToken = () => (dispatch: any) => {
  dispatch(loading());
  AsyncStorage.removeItem("userToken")
    .then((_data) => {
      dispatch(removeToken());
    })
    .catch((err) => {
      dispatch(error(err.message || "ERROR"));
    });
};
