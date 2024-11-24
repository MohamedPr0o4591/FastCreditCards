import { combineReducers } from "redux";
import { checkAuthReducer } from "./checkAuthReducer";
import { ipDataReducer } from "./ipDataReducer";
import { surfAdsReducer } from "./surf_ads_reducer";
import { surfAdsByIdReducer } from "./surf_ads_by_id_reducer";

export const rootReducer = combineReducers({
  CHECK_AUTH: checkAuthReducer,
  GET_IP_DATA: ipDataReducer,
  GET_SURF_ADS: surfAdsReducer,
  GET_SURF_ADS_ID: surfAdsByIdReducer,
});
