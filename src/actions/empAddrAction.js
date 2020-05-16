import { REQUEST_EMP_ADDR_DATA, RECEIVE_EMP_ADDR_DATA } from "./types";

const apiUrl = "https://8h16s.sse.codesandbox.io/getEmployeeAdress/";

export const reqEmpAddrData = () => {
  return {
    type: REQUEST_EMP_ADDR_DATA
  };
};
export const recievedEmpAddrData = data => {
  console.log("data recived in recievedAllEmpData", data);
  return {
    type: RECEIVE_EMP_ADDR_DATA,
    data
  };
};

export const requestEmpAddrData = empId => {
  return dispatch => {
    reqEmpAddrData();
    return fetch(apiUrl + empId)
      .then(res => res.json())
      .then(response => {
        dispatch(recievedEmpAddrData(response));
      })
      .catch(error => {
        throw error;
      });
  };
};
