import { combineReducers } from "redux";
import allEmpData from "./empListReducer";
import empAddress from "./empAddrReducer";

export default combineReducers({
  allEmpData,
  empAddress
});
