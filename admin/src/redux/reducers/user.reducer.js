import { userConstant } from "../actions/constants";

const initialState = {
    error: null,
    message: '',
    loading:false
}

export const userSignUpReducer = (state = initialState, action)=>{
    switch(action.type){
        case userConstant.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading:true
            }

        case userConstant.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading:false,
                message:action.payload.message
            }

        case userConstant.USER_REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload.error
            }
            default:
                return state
    }
}