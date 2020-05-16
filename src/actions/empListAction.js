import { REQUEST_EMP_DATA, RECEIVE_EMP_DATA } from "./types";

const apiUrl = "https://8h16s.sse.codesandbox.io/getAllEmployees";

export const reqAllEmpData = () => {
  return {
    type: REQUEST_EMP_DATA
  };
};
export const recievedAllEmpData = data => {
  console.log("data recived in recievedAllEmpData", data);
  return {
    type: RECEIVE_EMP_DATA,
    data
  };
};

export const requestAllEmpData = () => {
  return dispatch => {
    reqAllEmpData();
    return fetch(apiUrl)
      .then(res => res.json())
      .then(response => {
        dispatch(recievedAllEmpData(response));
      })
      .catch(error => {
        throw error;
      });
  };
};
