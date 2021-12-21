import axiosInstance from "../../helpers/axios";
import { userConstant } from "./constants";


export const signupAction = (user)=>async(dispatch)=>{
    dispatch({type:userConstant.USER_REGISTER_REQUEST})

    const res = await axiosInstance.post('/admin/signup', {...user})
    console.log("res", res)
    
    if(res.status === 201){
        const {message} = res.data
        console.log(message)
        dispatch({type:userConstant.USER_REGISTER_SUCCESS, payload : {message}})

} else {
    if(res.status === 400){
        dispatch({type:userConstant.USER_REGISTER_FAIL, payload :{error:res.data.error}})
    }
 }
}