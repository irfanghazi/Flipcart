

import {combineReducers} from "redux"
import { userLoginReducer } from "./auth.reducer"
import { userSignUpReducer } from "./user.reducer"


const rootReducer = combineReducers({
    userLoginReducer:userLoginReducer,
    userSignUpReducer:userSignUpReducer
})

export default rootReducer