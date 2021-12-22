import { categoryConstant } from "../actions/constants";

const initialState = {
    categories:[],
    loading: false,
    error:null
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstant.GET_ALL_CATEGORY_REQUEST:
      return {
        ...state,
        loading:false
      };

      case categoryConstant.GET_ALL_CATEGORY_SUCCESS:
          return{
              ...state,
              loading:true,
              categories: action.payload.categoris
          }

        case categoryConstant.GET_ALL_CATEGORY_FAIL:
            return {
                ...state,
                loading:false,
                error: action.payload.error
            }  
    default:
      return state;
  }
};
