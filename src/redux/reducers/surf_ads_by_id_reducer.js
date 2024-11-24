import { GET_SURF_ADS_ID } from "../types/allTypes";

var initialState = {
  data: [],
};

export const surfAdsByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SURF_ADS_ID:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
