import { CHECK_AUTH } from "../types/allTypes";

const initialState = {
  data: [],
};

export const checkAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AUTH:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
