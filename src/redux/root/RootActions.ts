import { ERROR_HAPPENED } from "./RootTypes";

export const errorHappend = (message: string) => ({
  type: ERROR_HAPPENED,
  message: message,
});
