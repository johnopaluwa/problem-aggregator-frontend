import { apiPost } from "../../global/api";
import { ProgressEnum, ReportProgress } from "../../global/ReportProgress";
import { errorHappend } from "../root/RootActions";
import { problemDataInterface } from "./ProblemInterface";
import {
  LOAD_PROBLEMS_WITH_PAGE,
  PROBLEM_LOADED_WITH_PAGE,
} from "./ProblemTypes";

export const loadProblemsWithPage = (page: number) => ({
  type: LOAD_PROBLEMS_WITH_PAGE,
  page: page,
});
export const problemsLoadedWithPage = (
  problems: problemDataInterface[],
  page: number
) => ({
  type: PROBLEM_LOADED_WITH_PAGE,
  problems: problems,
  page: page,
});

export const getProblemsByPage =
  (page: number, reportProgress: ReportProgress) => async (dispatch: any) => {
    try {
      reportProgress.state = ProgressEnum.loading;
      dispatch(loadProblemsWithPage(page));
      const response: any = await apiPost("auth/signup", { page: page });
      const problems = response.data as problemDataInterface[];
      dispatch(problemsLoadedWithPage(problems, page));
    } catch (error: any) {
      reportProgress.state = ProgressEnum.failed;
      const message = error.message as string;
      dispatch(errorHappend(message));
    }
  };
