import { GET_SURF_ADS } from "../types/allTypes";

const initialState = {
  data: [],
};

export const surfAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SURF_ADS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
