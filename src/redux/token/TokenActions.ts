import AsyncStorage from "@react-native-community/async-storage";
import { ProgressEnum, ReportProgress } from "../../global/ReportProgress";
import { tokenDataInterface } from "./TokenInterface";
import { ERROR, TOKEN_LOADED, TOKEN_REMOVED, TOKEN_SAVED } from "./TokenTypes";

export const tokenLoaded = (token: tokenDataInterface) => ({
  type: TOKEN_LOADED,
  token,
});

export const tokenSaved = (token: tokenDataInterface) => ({
  type: TOKEN_SAVED,
  token,
});

export const tokenRemoved = () => ({
  type: TOKEN_REMOVED,
});

export const error = (error: string) => ({
  type: ERROR,
  error,
});

export const getUserToken =
  (reportProgress: ReportProgress) => (dispatch: any) => {
    reportProgress.state = ProgressEnum.loading;
    AsyncStorage.getItem("userToken")
      .then((data) => {
        reportProgress.state = ProgressEnum.loaded;
        dispatch(tokenLoaded(JSON.parse(data)));
      })
      .catch((err) => {
        reportProgress.state = ProgressEnum.failed;
        dispatch(error(err.message || "ERROR"));
      });
  };

export const saveUserToken =
  (data: tokenDataInterface, reportProgress: ReportProgress) =>
  (dispatch: any) => {
    reportProgress.state = ProgressEnum.loading;
    AsyncStorage.setItem("userToken", JSON.stringify(data))
      .then((_) => {
        reportProgress.state = ProgressEnum.loaded;
        dispatch(tokenSaved(data));
      })
      .catch((err: Error) => {
        reportProgress.state = ProgressEnum.failed;
        dispatch(error(err.message || "ERROR"));
      });
  };

export const removeUserToken =
  (reportProgress: ReportProgress) => (dispatch: any) => {
    reportProgress.state = ProgressEnum.loading;
    AsyncStorage.removeItem("userToken")
      .then((_) => {
        reportProgress.state = ProgressEnum.loaded;
        dispatch(tokenRemoved());
      })
      .catch((err) => {
        reportProgress.state = ProgressEnum.failed;
        dispatch(error(err.message || "ERROR"));
      });
  };
