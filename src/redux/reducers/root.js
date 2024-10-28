import { combineReducers } from "redux";
import { checkAuthReducer } from "./checkAuthReducer";
import { ipDataReducer } from "./ipDataReducer";

export const rootReducer = combineReducers({
  CHECK_AUTH: checkAuthReducer,
  GET_IP_DATA: ipDataReducer,
});
