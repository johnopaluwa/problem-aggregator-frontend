import axios from "axios";

const baseUrl = "https://problem.herokuapp.com";
const token = (state: any) => state.token.token.userToken;

const handleError = (error: any) => {
  let errorResponseData;
  let status;
  if (error.response !== undefined) {
    errorResponseData = error.response.data;
    status = error.response.status;
  } else if (error.data !== undefined) {
    errorResponseData = error.data;
    status = error.status;
  } else {
    return { statusCode: 500, status: "error", message: error.message };
  }
  return { statusCode: status, ...errorResponseData };
};

function setHeaders(headers = false) {
  let headerData = {
    "content-type": "application/json",
    Accept: "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  if (headers) {
    headerData = { ...headerData, ...(headers as {}) };
  }
  return headerData;
}

function setBody(method: string, data: any) {
  if (method === "get" || method === "delete") {
    return { params: data };
  } else {
    return { data };
  }
}

function setUrl(url: string) {
  return `${baseUrl}/${url}`;
}

function callApi(url: string, data: any, method: any, header: any) {
  let headers = setHeaders(header);
  let body = setBody(method, data);

  let apiUrl = setUrl(url);
  return new Promise((resolve, reject) => {
    axios({
      url: apiUrl,
      ...body,
      headers: headers,
      method: method,
    })
      .then((data) => {
        resolve({ statusCode: data.status, ...data });
      })
      .catch((error) => {
        reject(handleError(error));
      });
  });
}

export const apiGet = (
  url: string,
  data?: any,
  header: boolean | {} = false
) => {
  // debugger;
  return callApi(url, data, "get", header);
};

export const apiPost = (
  url: string,
  data: any,
  header: boolean | {} = false
) => {
  // debugger;
  return callApi(url, data, "post", header);
};

export const apiPatch = (url: string, data: any, header = false) => {
  return callApi(url, data, "patch", header);
};

export const apiPut = (
  url: string,
  data?: any,
  header: boolean | {} = false
) => {
  // debugger;
  return callApi(url, data, "put", header);
};

export const apiDelete = (
  url: string,
  data: any,
  header: boolean | {} = false
) => {
  return callApi(url, data, "delete", header);
};
