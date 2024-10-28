import { GET_IP_DATA } from "../types/allTypes";

const initialState = {
  data: [],
};
export const ipDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IP_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
