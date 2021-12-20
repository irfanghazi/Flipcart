import { authConstant } from "../actions/constants";
const initialState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.LOGIN_REQUEST:
      return {
        ...state,
        authenticating:true,
        authenticate:false
      };

    case authConstant.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticating:false,
        authenticate:true
      };
    default:
      return state;
  }
};


