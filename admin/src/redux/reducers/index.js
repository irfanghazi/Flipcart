

import {combineReducers} from "redux"
import { userLoginReducer } from "./auth.reducer"
import { categoryReducer } from "./category.reducer"
import { userSignUpReducer } from "./user.reducer"



const rootReducer = combineReducers({
    userLoginReducer:userLoginReducer,
    userSignUpReducer:userSignUpReducer,
    categoryReducer:categoryReducer
    
})

export default rootReducer