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
  loading:false,
  error:null,
  message:''
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        authenticating:true,
        authenticate:false
      };

    case authConstant.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticating:false,
        authenticate:true
      };

      case authConstant.ADMIN_LOGOUT_REQUEST:
        return{
          ...initialState,
          loading:true
        }

        case authConstant.ADMIN_LOGOUT_SUCCESS:
          return{
            ...state,
            }

          case authConstant.ADMIN_LOGOUT_FAIL:
            return {
              ...state,
              loading:false

            }
    default:
      return state;
  }
};


