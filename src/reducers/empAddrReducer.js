import { REQUEST_EMP_ADDR_DATA, RECEIVE_EMP_ADDR_DATA } from "../actions/types";

export default function empListReducer(state = [], action) {
  switch (action.type) {
    case REQUEST_EMP_ADDR_DATA:
      return { ...state, loading: true };
    case RECEIVE_EMP_ADDR_DATA:
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
}
