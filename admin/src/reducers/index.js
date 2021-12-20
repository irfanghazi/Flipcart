

import {combineReducers} from "redux"
import { userLoginReducer } from "./auth.reducer"


const rootReducer = combineReducers({
    userLoginReducer:userLoginReducer
})

export default rootReducer